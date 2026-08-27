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

## pages.dev or workers.dev

Cloudflare has two products that serve this equally well, and the dashboard now
steers new projects towards Workers, so it is easy to end up on `workers.dev`
while expecting `pages.dev`.

Either is fine. The site is a directory of files; both just serve it. Pages gives
a preview URL for every pull request without configuration. Workers with static
assets is where Cloudflare is putting its effort. Attach a custom domain and the
difference disappears.

**For a `pages.dev` URL**, create a Pages project. In the dashboard this is
**Workers & Pages → Create → the Pages tab**, which sits beside Workers and is
easy to miss. Or skip the dashboard:

```sh
npx wrangler login
npx wrangler pages project create gailanapp --production-branch main
npm run deploy          # builds, then uploads out/
```

**For a `workers.dev` URL**, `wrangler.jsonc` is already set up to serve `out/`
as an assets-only Worker:

```sh
npm run deploy:worker
```

Do not point both at the same custom domain.

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

### Connecting it, the short way

In the Cloudflare dashboard: **Workers & Pages** → **Create** → **Pages** →
**Connect to Git**, pick `nich227/GailanWebsiteApp`, then set the build command,
output directory and Node version from the table above. Every push to `main`
deploys, and pull requests get their own preview URL. Nothing else to install.

### Connecting it, the other way

If you would rather GitHub built it, `.github/workflows/deploy.yml` builds the
site and uploads the result with wrangler. It is useful when the repository is
private and you do not want Cloudflare's GitHub App on it, or when you want the
build logs beside the code.

It does nothing until you turn it on:

1. Create the Pages project once, so there is something to upload to:
   `npx wrangler pages project create gailanapp --production-branch main`
2. In the repository, add two secrets under **Settings → Secrets and variables →
   Actions**: `CLOUDFLARE_API_TOKEN` (a token with the **Cloudflare Pages: Edit**
   permission) and `CLOUDFLARE_ACCOUNT_ID` (from the dashboard sidebar).
3. Add a repository **variable** in the same place: `CLOUDFLARE_DEPLOY` = `true`.

The deploy job is skipped while that variable is unset, so the workflow does not
fail before it is configured. `npm run deploy` does the same thing from your
machine once `wrangler login` has run.

Do not do both. Two sources deploying the same project fight over which build is
live.

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
