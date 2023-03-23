import {addPlugin, addServerHandler, createResolver, defineNuxtModule} from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@model-w/sentry',
    configKey: 'sentry'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addServerHandler({
      handler: resolver.resolve('./runtime/server/routes/sentry')
    })
  }
})