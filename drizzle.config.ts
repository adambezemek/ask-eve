import { defineConfig } from "drizzle-kit";
const databaseUrl =
  process.env.NETLIFY_DATABASE_URL ??
  process.env.NETLIFY_DATABASE_URL_UNPOOLED ??
  process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "Missing database connection string. Set NETLIFY_DATABASE_URL (or NETLIFY_DATABASE_URL_UNPOOLED / DATABASE_URL) in your environment.",
  );
}

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    // Netlify DB exposes pooled + unpooled URLs; drizzle CLI reads local .env for dev
    url: databaseUrl,
  },
});
