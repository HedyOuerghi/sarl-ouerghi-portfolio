# Cahier des charges, site vitrine SARL Ouerghi

## Présentation

**Client :** SARL Ouerghi
**Activité :** Artisan plombier chauffagiste
**Adresse :** Non communiquée, 06400 Cannes
**Situation actuelle :** aucune présence en ligne

## Objectifs

- Présenter l'activité et les services de l'entreprise
- Permettre à un visiteur de demander un devis facilement, sans appel obligatoire
- Donner confiance (artisan local, savoir-faire, réalisations)
- Fonctionner sans coût d'hébergement récurrent

## Cible

Particuliers et syndics à Cannes et dans les communes environnantes, ayant un besoin
de plomberie, de chauffage, ou une urgence à traiter rapidement.

## Contenu attendu (phase 1)

### Page Accueil

- Section hero (accroche + appel à l'action)
- Aperçu des 3 services (plomberie, chauffage, dépannage urgence)
- Aperçu des réalisations
- Bloc de réassurance (pourquoi choisir SARL Ouerghi)
- Formulaire de devis

### Page Services

Présentation détaillée des trois familles de prestations :

- **Plomberie** : fuites, canalisations, sanitaires, robinetterie, rénovation
- **Chauffage** : chaudières, chauffe-eau, radiateurs, entretien, dépannage
- **Dépannage urgence** : fuite d'eau, panne de chauffage, dégât des eaux

### Page Réalisations

Galerie de chantiers avec visuels avant/après. En phase 1, les visuels sont des
placeholders identifiés comme tels, en attendant les photos réelles des chantiers.

### Page Contact

- Coordonnées (adresse, téléphone, email)
- Horaires d'ouverture
- Zone d'intervention (communes couvertes)
- Formulaire de devis

### Page de confirmation (`/merci`)

Affichée après l'envoi réussi du formulaire de devis.

### Formulaire de devis

Composant réutilisable, présent sur la page Accueil et la page Contact. Champs :

- Nom et prénom
- Téléphone
- Type d'intervention (Plomberie / Chauffage / Dépannage urgence / Autre)
- Description du besoin

Traitement : Netlify Forms (détection automatique du formulaire statique, protection
anti-spam par champ honeypot, redirection vers `/merci` après envoi). Aucun serveur
applicatif à maintenir.

## Exigences SEO on-page

- Balise `title` et meta description propres à chaque page
- URL canonique par page
- Données structurées JSON-LD de type `Plumber` (sous-type de `LocalBusiness`),
  incluant l'adresse de l'entreprise

## Exigences d'accessibilité

- Conception mobile-first, responsive sur l'ensemble des pages
- Focus clavier visible sur tous les éléments interactifs
- Lien d'évitement (« aller au contenu principal ») en début de page
- Respect de la préférence système `prefers-reduced-motion`

## Direction visuelle

- Registre sobre, artisan du bâtiment, pas un look « startup »
- Palette : bleu pétrole (`#0e2a3b`), bleu de travail (`#16506e`), accent cuivre
  (`#c0703a`, survol `#d98a56`), texte ardoise (`#2a3540`), texte secondaire
  (`#5b6b76`), fond clair (`#f6f7f5`), filets (`#e0e3e1`)
- Typographies : « Barlow Semi Condensed » pour les titres, « Inter » pour le texte
  courant (Google Fonts)
- Signature visuelle : filet cuivre sous les titres de section

## Hors périmètre (Phase 2)

- Référencement Google Business Profile et travail SEO déployé
- Prise de rendez-vous en ligne
- Espace avis clients
- Outil interne de gestion des interventions

## Placeholders à lever avant mise en ligne définitive

- Téléphone : `04 XX XX XX XX`
- Email : `contact@sarl-ouerghi.fr`
- Photos de chantiers (page Réalisations)
- URL finale du site
