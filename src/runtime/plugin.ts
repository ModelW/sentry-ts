import { defineNuxtPlugin } from "#app";
import * as Sentry from "@sentry/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (config.public.sentryDSN) {
    Sentry.init({
      app: nuxtApp.vueApp,
      dsn: config.public.sentryDSN,
      environment: config.public.sentryEnvironment,
      tunnel: "/api/sentry",
    });
  }
});
