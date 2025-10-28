import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    // Netlify DB will inject env vars at runtime; drizzle CLI reads local .env for dev
    url: process.env.DATABASE_URL as string,
  },
});
