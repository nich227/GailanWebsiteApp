# The Gailan website

A static site about [Gailan](https://github.com/nich227/Gailan), built with Next.js
and exported as plain files.

## Running it

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # writes out/
npm start          # serves out/ to check the export
```

## Deploying to Cloudflare Pages

The site is a static export, so Pages serves it directly. No adapter, no
`next-on-pages`, no functions.

| setting | value |
|---|---|
| Framework preset | None, or Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 24 |

Set `NODE_VERSION` to `24` in the environment variables if the build picks an
older one. Nothing else needs configuring, and there are no secrets.

`output: 'export'` in `next.config.mjs` is what makes this work. Anything needing
a server at request time, route handlers, middleware, image optimisation, will
fail the build rather than fail quietly in production.

## The design

Nothing's design language: monochrome on paper white, one red, dot matrix for the
wordmark and section numbers, monospace for anything small, hairlines instead of
shadows, and a grid you can see. The structure is keyfold.io's: a floating pill of
navigation, one large headline, a pill to download.

Three typefaces, each with one job. Inter Tight for headlines, JetBrains Mono for
labels and code, DotGothic16 for the wordmark and the numbers.

The font variables are on `<html>`, not `<body>`. `globals.css` composes its font
stacks in `:root`, and a custom property that is not defined there makes the whole
declaration invalid, which silently falls back to serif.
