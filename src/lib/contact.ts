/**
 * Centralized contact information for the website.
 *
 * Values can be overridden at build time via Vite environment variables in
 * `.env` / `.env.local` (see `.env.example`):
 *
 *   VITE_CONTACT_PHONE          – E.164 phone number, e.g. "+918680901007"
 *   VITE_CONTACT_PHONE_DISPLAY  – Human-readable phone, e.g. "+91 86809 01007"
 *   VITE_CONTACT_EMAIL          – Support / contact email
 *
 * If unset, the defaults below are used.
 */

const env = import.meta.env as Record<string, string | undefined>;

export const CONTACT_PHONE = env.VITE_CONTACT_PHONE || "+918680901007";

export const CONTACT_PHONE_DISPLAY =
  env.VITE_CONTACT_PHONE_DISPLAY || "+91 86809 01007";

export const CONTACT_EMAIL = env.VITE_CONTACT_EMAIL || "hello@thukal.in";

/** `tel:` href ready to drop into an `<a>`. */
export const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE}`;

/** `mailto:` href, optionally with a subject line. */
export const mailtoHref = (subject?: string): string =>
  subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`;
