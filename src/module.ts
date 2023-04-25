import {
  addPlugin,
  addServerHandler,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@model-w/sentry",
    configKey: "sentry",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.sentry = defu(
      nuxt.options.runtimeConfig.public.sentry,
      options
    );

    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
    addServerHandler({
      route: '/api/sentry',
      handler: resolver.resolve("./runtime/server/routes/sentry"),
    });
  },
});
