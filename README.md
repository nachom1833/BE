# BE Studio Site

This is a Next.js 14 project built with the app router and Tailwind CSS.

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)
1. Connect your GitHub repository to Vercel at [vercel.com](https://vercel.com)
2. Vercel will automatically detect it as a Next.js app
3. The build will use the default settings (`npm run build`)
4. **No environment variables needed** - the app is configured to work out of the box

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📄 Available Pages

- **/** - Main BE Studio website
- **/demo** - Demo page
- **/ortopedia.html** - Gonzalo Simon Ortopedia Digital Form (standalone HTML)

## 🔧 Configuration

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **SEO**: Automatic sitemap generation and meta tags
- **Performance**: Static generation and optimized images

## 🌐 URLs

- **Production**: https://be-studio-site.vercel.app
- **Ortopedia Form**: https://be-studio-site.vercel.app/ortopedia.html

## 🛠 Local Development

```bash
npm install
npm run dev
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 📋 SEO & Search

- Metadata (title, description, Open Graph and Twitter tags) are defined in `app/layout.tsx`
- Sitemap automatically generated at `/sitemap.xml`
- Robots.txt configured for search engine crawling
