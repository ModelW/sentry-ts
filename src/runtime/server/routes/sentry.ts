import { useRuntimeConfig } from "#imports";
import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const dsn = new URL(config.public.sentry.dsn);
  // An authorization header has to be used otherwise Node complains about
  // authentication details being embedded in the URL.
  const headers = new Headers({
    Authorization:
      "Basic " +
      Buffer.from(`${dsn.username}:${dsn.password}`).toString("base64"),
  });
  dsn.username = "";
  dsn.password = "";
  dsn.pathname = `/api${dsn.pathname}/envelope/`;
  return await fetch(dsn.toString(), {
    method: "POST",
    body: event.node.req.read(),
    credentials: "include",
    headers,
  });
});
