/**
 * Meta Pixel + Conversions API event tracking.
 *
 * Every tracked event is sent twice, tagged with the same event_id so Meta
 * de-dupes them into a single event instead of double-counting:
 *
 *   1. Client-side, via window.fbq() — the Pixel loaded in index.html.
 *   2. Server-side, via the Netlify function at
 *      netlify/functions/capi-event.js, which forwards it to Meta's Graph
 *      API using an access token that never reaches the browser.
 *
 * The server-side leg is what keeps working when the browser leg doesn't:
 * ad blockers, Safari ITP, or the page navigating away (a tel:/mailto:/wa.me
 * link) before the client-side call finishes.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const CAPI_ENDPOINT = "/.netlify/functions/capi-event";

function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export type MetaCustomData = Record<string, unknown>;

/**
 * Fire a Meta Pixel event in the browser and mirror it server-side via the
 * Conversions API (same event_id on both, for dedup).
 *
 * Uses sendBeacon when available so the request survives page unload — the
 * common case here is a click on a tel:/mailto:/wa.me link, which starts
 * navigating away immediately.
 */
export function trackMetaEvent(eventName: string, customData?: MetaCustomData): void {
  if (typeof window === "undefined") return; // SSR guard

  const eventId = generateEventId();

  try {
    window.fbq?.("track", eventName, customData, { eventID: eventId });
  } catch {
    // Pixel unavailable (blocked, not yet loaded, etc.) — the server-side
    // leg below still records the event.
  }

  const body = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    event_source_url: window.location.href,
    user_data: {
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
    },
    ...(customData ? { custom_data: customData } : {}),
  });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(CAPI_ENDPOINT, new Blob([body], { type: "application/json" }));
    } else {
      fetch(CAPI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Tracking must never break navigation.
  }
}
