# Orhanlar Dekorasyon website

A Turkish-language website for a renovation and decoration business in Istanbul. Built with **Next.js 13**, **React**, **TypeScript**, and **Tailwind CSS**.

## What the project includes

- Service pages for painting, plasterboard, ceramic tiling, and full renovations
- A project gallery with a lightbox
- Responsive navigation and layouts
- Page-specific metadata for search and social previews
- A contact page with a form interface

The project is a website implementation. The gallery currently uses **illustrative Pexels images**, and some business figures and contact details in the source are placeholders. The contact form points to `YOUR_FORMSPREE_ID` and will **not send messages** until a real endpoint is configured. Replace those values with verified business information before deploying for a client.

## Run locally

```bash
git clone https://github.com/hayitboev/orhanlar.git
cd orhanlar
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check a production build, run `npm run build`.

## Structure

- `app/` — routes, layout, styles, and page metadata
- `components/` — header, footer, gallery, service cards, and UI components
- `lib/` and `hooks/` — shared helpers

## Before deployment

Update the contact details and Formspree endpoint in `app/iletisim/page.tsx`, replace illustrative images and unverified project statistics, and check the canonical business URL in `app/layout.tsx`. The repository does not establish that the example projects shown in the gallery are completed client work.
