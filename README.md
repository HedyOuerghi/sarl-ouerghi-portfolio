# SARL Ouerghi, site vitrine

Site réalisé pendant mon stage (CY Tech) pour SARL Ouerghi, plombier chauffagiste à Cannes.

Ce dépôt est une copie publique du projet : les coordonnées, les informations légales et
l'URL de production ont été remplacées par des valeurs génériques.

## Ce que fait le site

- Pages publiques : accueil, services, réalisations (avant/après), contact, mentions légales
- Formulaire de demande de devis via Netlify Forms
- Espace `/admin/` protégé par connexion GitHub :
  - édition des réalisations et des photos avec Decap CMS
  - emploi du temps, avec un flux `.ics` pour l'abonnement depuis Calendrier (iPhone/Mac)
  - lecture des demandes de devis reçues
  - suivi des clients et des factures (payé / impayé)

## Stack

- [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com)
- [Netlify](https://netlify.com) : hébergement, Forms, Functions et Blobs (offre gratuite)
- [Decap CMS](https://decapcms.org) avec une authentification OAuth GitHub maison

## Structure

```
docs/     cahier des charges et plan de projet
site/     projet Astro
```

## Lancer en local

```sh
cd site
npm install
npm run dev
```

Le site tourne sur `http://localhost:4321`. Build de production : `npm run build`
(sortie dans `site/dist/`).

La configuration Netlify est décrite dans [docs/PLAN.md](docs/PLAN.md).
