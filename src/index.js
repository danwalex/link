/**
 * danwalex.link — Cloudflare Worker
 *
 * La page (public/index.html) est servie via les "Static Assets" de Cloudflare.
 * Ce Worker sert de point d'entrée : c'est ici que tu pourras plus tard ajouter
 * du tracking de clics, des redirections courtes (ex: /discord), de l'A/B testing,
 * une géo-personnalisation, etc.
 *
 * Exemple de redirection courte (décommente pour l'activer) :
 *   const SHORTLINKS = { "/discord": "https://discord.gg/ton-serveur" };
 */
export default {
  async fetch(request, env /*, ctx */) {
    // const url = new URL(request.url);
    // if (SHORTLINKS[url.pathname]) {
    //   return Response.redirect(SHORTLINKS[url.pathname], 302);
    // }

    // Sert index.html et les autres fichiers statiques.
    return env.ASSETS.fetch(request);
  },
};
