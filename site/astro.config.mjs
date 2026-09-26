// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  adapter: netlify(),
  env: {
    schema: {
      OAUTH_GITHUB_CLIENT_ID: envField.string({ context: 'server', access: 'secret' }),
      OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: 'server', access: 'secret' }),
      OAUTH_GITHUB_REPO_ID: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      NETLIFY_API_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      NETLIFY_SITE_ID: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/merci') &&
        !page.includes('/mentions-legales') &&
        !page.includes('/politique-de-confidentialite'),
    }),
    decapCmsOauth({
      adminDisabled: true,
      oauthDisabled: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
