# Plan de projet, site vitrine SARL Ouerghi

## Objectif

Donner à SARL Ouerghi (artisan plombier chauffagiste, Cannes) une présence en ligne
professionnelle et gratuite à héberger, permettant à des prospects de découvrir
l'activité et de demander un devis en ligne.

Ce projet est réalisé dans le cadre d'un stage (CY Tech).

## Contraintes

- Aucun budget d'hébergement : le site doit fonctionner intégralement sur des offres
  gratuites (Netlify pour l'hébergement, Netlify Forms pour la réception des demandes
  de devis, pas de backend ni de base de données à maintenir).
- Contenu en français, ton sobre et rassurant, adapté à un artisan du bâtiment.

## Découpage en phases

### Phase 1 : vitrine

- Page Accueil (hero, aperçu services, aperçu réalisations, réassurance, formulaire de devis)
- Page Services (plomberie, chauffage, dépannage urgence)
- Page Réalisations (galerie de chantiers avant/après, placeholders en attendant les
  photos réelles)
- Page Contact (coordonnées, horaires, zone d'intervention, formulaire de devis)
- Page de confirmation (`/merci`) après envoi du formulaire
- SEO on-page : title et meta description par page, canonical, données structurées
  JSON-LD (`Plumber` / `LocalBusiness`)
- Accessibilité : mobile-first, focus clavier visible, lien d'évitement,
  respect de `prefers-reduced-motion`

### Phase 2 : à venir

- Référencement Google Business Profile et travail SEO déployé (indexation, contenu
  additionnel, netlinking local)
- Prise de rendez-vous en ligne
- Espace avis clients
- Outil interne de gestion des interventions

## Outils

- Astro 5 (sortie statique) + Tailwind CSS 4 (`@tailwindcss/vite`)
- Netlify (hébergement + Netlify Forms)
- GitHub pour le versioning

## Workflow Git

- Branche `main` : version stable, correspond à ce qui est déployé en production
- Branche `dev` : intégration des fonctionnalités avant passage sur `main`
- Commits au format conventionnel (`feat:`, `fix:`, `docs:`, `chore:`, ...)

## Déploiement Netlify

Lors de la connexion du dépôt GitHub à Netlify, utiliser les réglages suivants :

| Paramètre          | Valeur          |
| ------------------- | --------------- |
| Base directory       | `site`          |
| Build command        | `npm run build` |
| Publish directory     | `site/dist`     |

Les demandes de devis (formulaires) sont automatiquement collectées par Netlify Forms,
consultables dans l'onglet « Forms » du site sur Netlify. Rien à configurer en plus des
attributs déjà présents dans le formulaire.

## Reste à faire

- Photos de chantiers (page Réalisations), voir la convention de nommage ci-dessous
- Nom de domaine final (le site tourne pour l'instant sur l'URL Netlify par défaut)

## Convention de nommage des photos de chantier

Un dossier à plat, pas de sous-dossiers : `site/public/images/realisations/`.

Format de fichier : `<type>-<numero>-avant.jpg` et `<type>-<numero>-apres.jpg`
(`<type>` est libre : douche, chaudiere, clim, fuite, robinetterie... ; `<numero>` sert
à distinguer plusieurs chantiers du même type). Exemple :

```
site/public/images/realisations/
  douche-1-avant.jpg
  douche-1-apres.jpg
  chaudiere-1-avant.jpg
  chaudiere-1-apres.jpg
  clim-1-avant.jpg
  clim-1-apres.jpg
```

Chaque chantier a un fichier JSON dans `site/src/content/realisations/` (champs
`imageAvant` / `imageApres`), modifiable aussi depuis le CMS (`/admin/cms`). Pour
l'instant ce sont des SVG provisoires nommés selon la même convention.
