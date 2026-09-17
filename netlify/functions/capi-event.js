// Meta Conversions API relay.
//
// Browser-side, fbq() sends events straight to Meta from the visitor's
// browser (blockable by ad blockers / ITP / disabled JS). This function is
// the server-side half of the same events: the client posts a small JSON
// payload here, and this function forwards it to Meta's Graph API using
// META_ACCESS_TOKEN, which never reaches the browser.
//
// Required environment variables (set in Netlify Site settings ->
// Environment variables — NOT GitHub repo/Action secrets, which are only
// visible to GitHub Actions workflows and are never exposed to Netlify's
// build or function runtime):
//   META_ACCESS_TOKEN  - Conversions API system-user access token
//   META_DATASET_ID    - the Meta Pixel/Dataset ID events are attributed to
//
// Dedup with the browser Pixel: the caller supplies the same `event_id`
// used in the matching fbq('track', name, data, {eventID}) call, so Meta
// merges the two into a single event instead of double-counting.
const GRAPH_VERSION = "v21.0";

const JSON_HEADERS = { "Content-Type": "application/json" };

// ESM export: the repo's root package.json declares "type": "module", so a
// plain .js file here is loaded as an ES module, not CommonJS — `export
// const handler` (rather than `exports.handler`) is required or Netlify's
// bundler fails with "exports is not defined in ES module scope".
export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: JSON_HEADERS, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  const accessToken = process.env.META_ACCESS_TOKEN;
  const datasetId = process.env.META_DATASET_ID;

  if (!accessToken || !datasetId) {
    console.error("capi-event: missing META_ACCESS_TOKEN or META_DATASET_ID environment variable");
    return { statusCode: 500, headers: JSON_HEADERS, body: JSON.stringify({ error: "Server not configured" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers: JSON_HEADERS, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const { event_name, event_id, event_source_url, action_source, user_data, custom_data } = payload;

  if (!event_name || typeof event_name !== "string") {
    return { statusCode: 400, headers: JSON_HEADERS, body: JSON.stringify({ error: "event_name is required" }) };
  }

  // Best-effort real client IP behind Netlify's edge, falling back to the
  // standard proxy header. Needed for CAPI match quality.
  const clientIp =
    event.headers["x-nf-client-connection-ip"] ||
    (event.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    undefined;
  const userAgent = event.headers["user-agent"] || undefined;

  const fbEvent = {
    event_name,
    event_time: Math.floor(Date.now() / 1000),
    action_source: action_source || "website",
    ...(event_id ? { event_id } : {}),
    ...(event_source_url ? { event_source_url } : {}),
    user_data: {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      ...(user_data && typeof user_data === "object" ? user_data : {}),
    },
    ...(custom_data && typeof custom_data === "object" ? { custom_data } : {}),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${datasetId}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: "POST",
        headers: JSON_HEADERS,
        body: JSON.stringify({ data: [fbEvent] }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("capi-event: Meta Graph API rejected the event", result);
      return { statusCode: 502, headers: JSON_HEADERS, body: JSON.stringify({ error: "Meta API error", details: result }) };
    }

    return { statusCode: 200, headers: JSON_HEADERS, body: JSON.stringify(result) };
  } catch (err) {
    console.error("capi-event: request to Meta Graph API failed", err);
    return { statusCode: 500, headers: JSON_HEADERS, body: JSON.stringify({ error: "Internal error" }) };
  }
};
