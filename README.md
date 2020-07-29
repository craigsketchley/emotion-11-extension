# Emotion 11 Browser Extension

This is a simple reproduction of an issue I'm having when trying to use emotion 11 in a browser
extension content script on a page that also has emotion 11 running.

It's a very small browser extension that just adds a floating green circle in the bottom right
corner of the page. The elements are created in React using emotion 11 and are wrapped in a
CacheProvider.

The extension script app is located in `src/content.js`.

## Build & Load

To build the extension script, run:

```bash
npm i && npm run build
```

This outputs the bundle to `/dist`.

To install the extension in Chrome, go to `chrome://extensions`, click 'Load unpacked', and add the
`dist/` directory (which includes the bundled `content.js` and extension `manifest.json`).

The extension should then run on any page you visit in the browser.

> NOTE: I ran this in Chrome, but I think it should work in Firefox too.

## Emotion 11 Clash

To reproduce the problem I'm having just visit any site using emotion 11.
