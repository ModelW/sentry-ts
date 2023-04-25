# Installation

You can install Model W Sentry in your project with the following command.

```shell
npm install @model-w/sentry
```

To use it, configure the module in the `nuxt.config.ts` file. 
Here is a minimalistic example:

```typescript
export default defineNuxtConfig(
  {
    modules: [
        "@model-w/sentry"
    ],
    sentry: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.SENTRY_ENVIRONMENT
    }
  }
)
```

Once the Sentry DSN and environment are specified, errors should be sent to Sentry.
