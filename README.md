# ModelW Sentry

This module is intended to enable the Sentry stuff to track the different errors that happens in frontend side.

### Installation
To install this module we need to get it from npm with the following command:
```commandline
npm install @model-w/sentry
```
### Setup
There are to things we need to keep in track to make this module work.
The first one is to add a `.env` file in the root of our frontend.
These must contain your sentry dsn from the project:
```dotenv
SENTRY_DSN="https://123456789@123456789.ingest.sentry.io/123456789"
```

After we need to add to the `nuxt.config.ts` file, the following param:
```typescript
    runtimeConfig: {
        public:
            {
                sentryDSN: process.env.SENTRY_DSN
            }
        }
```

With all these done the sentry must start to track the errors you have
