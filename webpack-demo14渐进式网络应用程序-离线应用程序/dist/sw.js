importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "76263f6901c9cc9ac1f96f430e3a94d4"
  },
  {
    "url": "main.d1f4e624709b9ae9c4dc.bundle.js",
    "revision": "54180826813b09e3b7d804afdc76620e"
  },
  {
    "url": "polyfills.7558924f2851b9888345.bundle.js",
    "revision": "1fcb534651a97d731f043841bd373ced"
  },
  {
    "url": "runtime.49e500a831c25a6ca7c2.bundle.js",
    "revision": "6053507d9a40a9a452451fcaa65b8f3a"
  },
  {
    "url": "vendors.64580b56608facc9398c.bundle.js",
    "revision": "536ba50ac8574beef3d75c247b312648"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
