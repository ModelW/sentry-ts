# Installation

In order to install the Model W Sentry, you need to add it to the `package.json`, for example `"@model-w/sentry": "~0.3.0"`,
or use the next command 
```shell
npm install @model-w/sentry
```

Then you can use it in your project modifying the `nuxt.config.ts` file. 
Here is a minimalistic example:

```typescript
export default defineNuxtConfig(
  {
    modules: [
        "@model-w/sentry"
    ],
    sentry: {
        dsn: process.env.SENTRY_DSN
    }
  }
)
```

Once the Sentry DSN is specified, errors should be sent to Sentry.
