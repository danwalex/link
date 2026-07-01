# danwalex.link

Page **link-in-bio** (style Linktree) de danwalex — Discord, X, Instagram, Twitch, YouTube, TikTok — servie par un **Cloudflare Worker**.

Dark, animée (blobs en dégradé, anneau rotatif, entrée en cascade, survols néon par plateforme), responsive, accessible (respecte `prefers-reduced-motion`), et fonctionne même sans JavaScript.

## Structure

```
public/index.html   → la page (tout le HTML/CSS/JS est ici)
public/_headers     → en-têtes de sécurité
src/index.js        → le Worker (point d'entrée, extensible)
wrangler.jsonc      → config Cloudflare
```

## Développer en local

```bash
npm install
npm run dev          # http://localhost:8787
```

## Déployer

```bash
npx wrangler login   # une seule fois : connecte ton compte Cloudflare
npm run deploy
```

La page sera en ligne sur `https://danwalex-link.<ton-sous-domaine>.workers.dev`.

## Brancher link.danwalex.com

1. Le domaine `danwalex.com` doit déjà être géré par Cloudflare (nameservers Cloudflare).
2. Dans [`wrangler.jsonc`](wrangler.jsonc), décommente le bloc `routes` :
   ```jsonc
   "routes": [
     { "pattern": "link.danwalex.com", "custom_domain": true }
   ]
   ```
3. Relance `npm run deploy`. Cloudflare crée automatiquement l'enregistrement DNS et le certificat SSL.

## Personnaliser

- **Liens** : modifie les `href="..."` dans [`public/index.html`](public/index.html) (section `<nav class="links">`). Pour ajouter/retirer une plateforme, copie/supprime un bloc `<a class="link">`. La couleur d'accent au survol est le `--brand` en style inline.
- **Photo de profil** : remplace le bloc `<div class="avatar">` par `<img class="avatar" src="/avatar.jpg" alt="danwalex">` (dépose `avatar.jpg` dans `public/`).
- **Nom / bio / handle** : dans le `<main>`.
- **Aperçu au partage** : ajoute une image `public/og.png` (1200×630) et décommente la ligne `og:image` dans le `<head>`.
- **Redirections courtes** (ex. `link.danwalex.com/discord`) : voir l'exemple commenté dans [`src/index.js`](src/index.js).
