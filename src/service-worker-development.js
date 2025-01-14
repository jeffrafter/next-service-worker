/* eslint-disable no-undef */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

console.info(
  "[next-service-worker] This is a noop service worker for local development. This ensures that a previously installed service worker is ejected. Your configured service worker will be generated in production builds. If you want to inspect the production service worker locally, you can run `next build` followed by `next start`. Alternatively, you can opt into production service worker generation in local development by setting `serviceWorker.enableInDevelopment: true` in your next.config.js. See https://github.com/tatethurston/next-service-worker for configuration options."
);
