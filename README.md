# BE Studio Site

This is a Next.js 14 project built with the app router and Tailwind CSS.

## Deployment to Vercel

1. Push this repository to GitHub (or another Git provider).
2. Go to [Vercel](https://vercel.com) and import the project.
3. Vercel will detect it as a Next.js app and use the default build settings (`npm run build`).
4. Set the environment variable `SITE_URL` to the production URL (e.g. `https://yourdomain.com`) under **Settings > Environment Variables**.

## SEO & Search Preview

- Metadata (title, description, Open Graph and Twitter tags) are defined in `app/layout.tsx`.
- A sitemap is automatically generated at `/sitemap.xml` via `app/sitemap.ts`.
- A basic `robots.txt` is provided in the `public` folder.

> Replace `yourdomain.com` with your actual domain once deployed.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```
