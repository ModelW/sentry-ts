import { defineNuxtPlugin } from "#app";
import { useRuntimeConfig } from "#imports";
import * as Sentry from "@sentry/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (config.public.sentry.dsn) {
    Sentry.init({
      app: nuxtApp.vueApp,
      dsn: config.public.sentry.dsn,
      environment: config.public.sentry.environment,
      tunnel: "/api/sentry",
    });
  }
});
