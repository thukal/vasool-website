// Tests for the Meta CAPI relay function. No real network calls are made:
// `fetch` is stubbed before each test that would otherwise reach Meta's
// Graph API.
//
// Run with: node --test netlify/functions/__tests__/capi-event.test.mjs
import { test, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";

const baseEvent = (overrides = {}) => ({
  httpMethod: "POST",
  headers: { "user-agent": "test-agent" },
  body: JSON.stringify({ event_name: "Lead" }),
  ...overrides,
});

let handler;
let originalFetch;

before(async () => {
  process.env.META_ACCESS_TOKEN = "test-token";
  process.env.META_DATASET_ID = "test-dataset";
  ({ handler } = await import("../capi-event.js"));
  originalFetch = globalThis.fetch;
});

after(() => {
  globalThis.fetch = originalFetch;
});

beforeEach(() => {
  globalThis.fetch = async () =>
    new Response(JSON.stringify({ events_received: 1 }), { status: 200 });
});

test("GET is rejected with 405 Method Not Allowed", async () => {
  const res = await handler(baseEvent({ httpMethod: "GET", body: undefined }));
  assert.equal(res.statusCode, 405);
  assert.deepEqual(JSON.parse(res.body), { error: "Method Not Allowed" });
  assert.equal(res.headers["X-Robots-Tag"], "noindex");
});

test("OPTIONS is rejected with 405 (no CORS preflight needed for a same-origin call)", async () => {
  const res = await handler(baseEvent({ httpMethod: "OPTIONS", body: undefined }));
  assert.equal(res.statusCode, 405);
});

test("POST with invalid JSON body returns 400", async () => {
  const res = await handler(baseEvent({ body: "not json" }));
  assert.equal(res.statusCode, 400);
  assert.deepEqual(JSON.parse(res.body), { error: "Invalid JSON body" });
});

test("POST missing event_name returns 400", async () => {
  const res = await handler(baseEvent({ body: JSON.stringify({}) }));
  assert.equal(res.statusCode, 400);
  assert.match(JSON.parse(res.body).error, /event_name/);
});

test("valid POST forwards to Meta and returns 200", async () => {
  let capturedUrl;
  let capturedBody;
  globalThis.fetch = async (url, init) => {
    capturedUrl = url;
    capturedBody = JSON.parse(init.body);
    return new Response(JSON.stringify({ events_received: 1 }), { status: 200 });
  };

  const res = await handler(
    baseEvent({ body: JSON.stringify({ event_name: "Lead", event_id: "abc-123" }) }),
  );

  assert.equal(res.statusCode, 200);
  assert.deepEqual(JSON.parse(res.body), { events_received: 1 });
  assert.match(capturedUrl, /^https:\/\/graph\.facebook\.com\/v21\.0\/test-dataset\/events\?access_token=/);
  assert.equal(capturedBody.data[0].event_name, "Lead");
  assert.equal(capturedBody.data[0].event_id, "abc-123");
});

test("X-Robots-Tag is present on the response but never sent to Meta", async () => {
  let capturedHeaders;
  globalThis.fetch = async (_url, init) => {
    capturedHeaders = init.headers;
    return new Response(JSON.stringify({ events_received: 1 }), { status: 200 });
  };

  const res = await handler(baseEvent());

  assert.equal(res.headers["X-Robots-Tag"], "noindex");
  assert.equal(capturedHeaders["X-Robots-Tag"], undefined);
  assert.deepEqual(Object.keys(capturedHeaders), ["Content-Type"]);
});

test("Meta API rejection is surfaced as 502", async () => {
  globalThis.fetch = async () =>
    new Response(JSON.stringify({ error: { message: "bad token" } }), { status: 400 });

  const res = await handler(baseEvent());
  assert.equal(res.statusCode, 502);
  assert.equal(JSON.parse(res.body).error, "Meta API error");
});

test("network failure to Meta is surfaced as 500", async () => {
  globalThis.fetch = async () => {
    throw new Error("network down");
  };

  const res = await handler(baseEvent());
  assert.equal(res.statusCode, 500);
  assert.equal(JSON.parse(res.body).error, "Internal error");
});

test("missing environment configuration returns 500 without leaking details", async () => {
  const savedToken = process.env.META_ACCESS_TOKEN;
  delete process.env.META_ACCESS_TOKEN;
  try {
    const res = await handler(baseEvent());
    assert.equal(res.statusCode, 500);
    assert.deepEqual(JSON.parse(res.body), { error: "Server not configured" });
  } finally {
    process.env.META_ACCESS_TOKEN = savedToken;
  }
});
