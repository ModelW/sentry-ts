import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["../src/module"],
  runtimeConfig: {},
  // This is going to be passed to the runtimeConfig.public side, that could be shown on the client
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
});
