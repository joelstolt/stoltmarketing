import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal OpenNext-konfig för Cloudflare Workers.
// Sajten kör force-dynamic på kunddashboards och statiskt på resten,
// så ingen ISR/incremental-cache behövs i nuläget.
export default defineCloudflareConfig({});
