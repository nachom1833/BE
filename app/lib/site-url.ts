const NON_PRODUCTION_FALLBACK_URL = "http://localhost:3000";
const PRODUCTION_FALLBACK_URL = "https://example.com";

/**
 * Canonical site URL used by metadata and sitemap.
 *
 * - Preferred source: SITE_URL environment variable.
 * - Explicit fallback for non-production environments: http://localhost:3000.
 * - Production fallback is https://example.com to avoid silently pointing to localhost.
 */
export const SITE_URL = (
  process.env.SITE_URL ||
  (process.env.NODE_ENV === "production"
    ? PRODUCTION_FALLBACK_URL
    : NON_PRODUCTION_FALLBACK_URL)
).replace(/\/$/, "");
