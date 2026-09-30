# Dur E Sabeeh Seed Corporation — Website

A Nuxt 4 + TypeScript + Tailwind website for the seed brand, built so it's easy to
extend without touching the core structure: add a page by adding a file, add a
seed variety by adding one object, and the seed-verification feature already
works end to end (with mock data you'll swap for a real database).

## 1. Requirements

- Node.js 20 or newer
- npm (or pnpm/yarn if you prefer — just swap the commands below)

## 2. First run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Try the "Verify Seed" flow with code
`DS-WHT-26-001` or `DS-RIC-26-014` — both are demo-ready.

## 3. Project structure

```
dur-e-sabeeh/
├── app/
│   ├── app.vue                 # Root component (just wires up the layout)
│   ├── layouts/default.vue     # Header + page + footer wrapper
│   ├── components/
│   │   ├── AppHeader.vue       # Nav bar, incl. mobile menu + Seeds dropdown
│   │   ├── AppFooter.vue
│   │   ├── HeroSection.vue     # Reusable page-top banner
│   │   └── SeedCard.vue        # Small clickable crop/variety card
│   ├── data/
│   │   └── products.ts         # ⭐ Edit this to add/change seed varieties
│   ├── pages/                  # File-based routing — see section 4
│   └── assets/css/main.css     # Brand colors + Tailwind entry point
├── server/
│   ├── api/verify/[code].ts    # GET /api/verify/:code — verification endpoint
│   └── data/seedLots.ts        # ⭐ Mock "database" of bag codes — swap for real DB
├── nuxt.config.ts
└── package.json
```

Nuxt 4 uses the `app/` directory by default for pages, components and
layouts — everything above is auto-imported, so you never need to write
`import Header from ...` for a component.

## 4. Pages already built

| Route                  | File                                  |
|-------------------------|---------------------------------------|
| `/`                     | `app/pages/index.vue`                 |
| `/about`                | `app/pages/about.vue`                 |
| `/seeds`                | `app/pages/seeds/index.vue`           |
| `/seeds/wheat`          | `app/pages/seeds/wheat.vue`           |
| `/seeds/rice`           | `app/pages/seeds/rice.vue`            |
| `/seeds/other-crops`    | `app/pages/seeds/other-crops.vue`     |
| `/research`             | `app/pages/research.vue`              |
| `/farmers`              | `app/pages/farmers.vue`               |
| `/dealers`              | `app/pages/dealers.vue`               |
| `/news`                 | `app/pages/news.vue`                  |
| `/contact`              | `app/pages/contact.vue`               |
| `/verify`               | `app/pages/verify/index.vue`          |
| `/verify/DS-WHT-26-001` | `app/pages/verify/[code].vue`         |

**To add a new page:** create a `.vue` file under `app/pages/`. The file
path becomes the URL automatically — no router config to edit. Add its
link to the `nav` array in `AppHeader.vue` if it should appear in the menu.

## 5. Adding a seed variety (no new page needed)

Open `app/data/products.ts` and add an object to the `seedVarieties` array:

```ts
{
  slug: 'my-new-variety',
  name: 'My New Variety',
  crop: 'wheat', // 'wheat' | 'rice' | 'other'
  tagline: 'One-line pitch',
  description: 'Longer description.',
  traits: ['Certified seed class', 'Another trait'],
  packSizes: ['50 KG']
}
```

It appears automatically on `/seeds/wheat`, `/seeds/rice` or
`/seeds/other-crops` — whichever `crop` you set.

## 6. The seed verification feature (QR codes)

This is the trust-building feature from the brief. How it works today:

1. `server/data/seedLots.ts` holds an array of bag/lot codes — this is a
   stand-in for a real database table.
2. `server/api/verify/[code].ts` is a server API route: a GET request to
   `/api/verify/DS-WHT-26-001` looks the code up and returns JSON.
3. `app/pages/verify/[code].vue` is the page a QR code should point to —
   it calls that API and renders "PRODUCT VERIFIED" or "not recognized."
4. `app/pages/verify/index.vue` is a manual entry form for people without
   a scanner, which just navigates to the page above.

**Printing QR codes:** generate one per lot that encodes
`https://duresabeeh.com/verify/DS-WHT-26-001` (swap in the real domain).
Any QR generator works since the destination is a normal page URL.

**Moving to a real database:** replace the contents of
`server/data/seedLots.ts` with a query (Postgres via `pg`, or an ORM like
Drizzle/Prisma). Keep the `SeedLot` interface the same shape and
`server/api/verify/[code].ts` needs no changes at all.

## 7. Brand colors

All brand colors are CSS variables at the top of `app/assets/css/main.css`:

```css
--color-brand-green: #1f4d2c;
--color-brand-green-dark: #143620;
--color-brand-gold: #c99a2e;
--color-brand-cream: #faf7ef;
```

Change these three values and the whole site re-colors — header, buttons,
footer, hero background all reference the variables rather than hard-coded
hex values.

## 8. Images

The hero currently uses a green gradient instead of a photo so the project
runs with zero image assets. To add a real field photo:

1. Drop the image in `public/` (e.g. `public/hero-field.jpg`).
2. In `HeroSection.vue`, replace the gradient `<div>` with:
   ```html
   <img src="/hero-field.jpg" class="absolute inset-0 -z-10 h-full w-full object-cover" />
   <div class="absolute inset-0 -z-10 bg-black/40" />
   ```

## 9. Growing the project later

Ideas that fit the structure without a rewrite:

- **CMS-driven news/articles:** add `@nuxt/content` and turn `app/pages/news.vue`
  into a listing that reads from `content/news/*.md`.
- **Dealer directory:** move the hardcoded array in `dealers.vue` into
  `app/data/dealers.ts`, same pattern as `products.ts`.
- **Contact form backend:** add `server/api/contact.ts` that emails you
  (e.g. via Resend or Nodemailer) and call it from `contact.vue`'s `submit()`.
- **Real database:** add Postgres (or any DB) once `server/data/seedLots.ts`
  needs to be a real table — Nuxt's server routes run as normal Node/Nitro
  handlers, so any Node DB client works.

## 10. Build & deploy

```bash
npm run build      # produces .output/ — deploy this to Node hosting
# or
npm run generate    # static export, for static hosts (careful: /verify/[code]
                     # needs a server, so prefer `build` unless you wire the
                     # verify API to an external endpoint)
```

Works well on Vercel, Netlify, or any Node host — the Nuxt preset auto-detects
most of these; see the Nuxt deployment docs if you pick something else.
