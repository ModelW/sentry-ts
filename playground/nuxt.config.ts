export default defineNuxtConfig({
  runtimeConfig: {
    public:
    {
      sentryDSN: process.env.SENTRY_DSN
    }
  },
  modules: ['../src/module'],
  myModule: {}
})
