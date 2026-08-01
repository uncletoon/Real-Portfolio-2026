# Patience Tuyisenge Portfolio

A responsive portfolio built with React, Vite, and TypeScript.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The production-ready static files are generated in `dist/` and can be hosted on any static hosting provider.

## Optional contact form

Copy `.env.example` to `.env` and set `VITE_CONTACT_FORM_ENDPOINT` to a Formspree, Web3Forms, or custom API endpoint. Without it, the site directs visitors to the published email address instead of claiming a message was sent.

After selecting a production domain, add its canonical URL and use an absolute URL for `/og.png` in `index.html`.
