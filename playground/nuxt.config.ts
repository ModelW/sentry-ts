import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  modules: ['../src/module'],
  runtimeConfig: {
    public:
    {
      sentryDSN: process.env.SENTRY_DSN
    }
  },
  myModule: {}
})
