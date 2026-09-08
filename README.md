# F.C. DOD's website

A static React/Vite website designed for free hosting on GitHub Pages. It has no server, database, or paid hosting dependency.

## Run locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The included workflow will build and publish the site automatically.

The contact form opens WhatsApp with the visitor's entered details. Replace the placeholder phone number, email, address, founder details, product specifications, and generated concept images before publishing.

## Domains

Use `fcdods.com` as the primary GitHub Pages custom domain. In GoDaddy, point the root `@` to GitHub Pages using its four official A records and point `www` to `salonisingla50.github.io` with a CNAME record.

Use GoDaddy Domain Forwarding to permanently redirect `fcdods.co.in` and `www.fcdods.co.in` to `https://fcdods.com`. GitHub Pages accepts one apex custom domain per site, so the second domain should redirect to the primary one.
