import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["../src/module"],
  runtimeConfig: {},
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
});
