// Coordonnées et informations de l'entreprise.
// Centraliser ces valeurs ici évite de les dupliquer sur chaque page.
export const entreprise = {
  nom: "SARL Ouerghi",
  slogan: "Plomberie, chauffage & climatisation à Cannes",
  telephone: "06 00 00 00 00",
  telephoneHref: "tel:+33600000000",
  email: "contact@example.com",
  adresse: {
    rue: "Adresse non communiquée",
    codePostal: "06400",
    ville: "Cannes",
    pays: "FR",
  },
  legal: {
    denominationSociale: "Entreprise Démo",
    formeJuridique: "SARL",
    capitalSocial: "Non communiqué",
    siret: "000 000 000 00000",
    siren: "000 000 000",
    tva: "FR00 000000000",
    rcsVille: "Cannes",
    gerant: "Gérant",
  },
  zoneIntervention: [
    "Cannes",
    "Le Cannet",
    "Mougins",
    "Vallauris",
    "Mandelieu-la-Napoule",
    "Golfe-Juan",
    "Nice",
    "Fréjus",
    "Carros",
  ],
  horaires: [
    { jours: "Lundi au vendredi", plage: "8h à 18h30" },
    { jours: "Week-end", plage: "Fermé (possible sur demande)" },
  ],
  urlSite: "https://example.com",
};

export const services = [
  {
    slug: "plomberie",
    titre: "Plomberie",
    resume:
      "Installation, réparation et entretien de vos canalisations, sanitaires et robinetteries.",
    description:
      "Fuites, canalisations bouchées, pose de sanitaires ou de robinetterie : on intervient pour un simple dépannage comme pour la rénovation d'une salle de bain.",
    prestations: [
      "Recherche et réparation de fuites",
      "Débouchage de canalisations",
      "Installation et remplacement de sanitaires (WC, lavabo, douche, baignoire)",
      "Pose de robinetterie",
      "Rénovation de salle de bain",
    ],
  },
  {
    slug: "chauffage",
    titre: "Chauffage",
    resume:
      "Installation, entretien et dépannage de chaudières, chauffe-eau et radiateurs.",
    description:
      "Installation et entretien annuel de chaudières, chauffe-eau et radiateurs. Certificat de conformité gaz sur nos installations, certifié Qualibat RGE, et installateur agréé pour le réseau Savelys (ex-Engie Home Service).",
    prestations: [
      "Installation de chaudières gaz et électriques",
      "Entretien annuel de chaudière",
      "Remplacement de chauffe-eau",
      "Pose et équilibrage de radiateurs",
      "Diagnostic de panne",
    ],
  },
  {
    slug: "climatisation",
    titre: "Climatisation",
    resume:
      "Installation et entretien de systèmes de climatisation, réversibles ou non.",
    description:
      "Pose, entretien annuel et dépannage de climatisation. Attestation de capacité pour la manipulation des fluides frigorigènes délivrée par Bureau Veritas.",
    prestations: [
      "Installation de climatiseurs (split, multi-split, réversible)",
      "Entretien annuel et recharge de fluide frigorigène",
      "Diagnostic et dépannage",
    ],
  },
  {
    slug: "depannage-urgence",
    titre: "Dépannage urgence",
    resume:
      "Intervention rapide en cas de fuite d'eau ou de panne de chauffage.",
    description:
      "En cas de fuite d'eau ou de panne de chauffage, on se déplace rapidement à Cannes et dans les environs pour couper, sécuriser et réparer.",
    prestations: [
      "Fuite d'eau importante",
      "Panne de chauffage en hiver",
      "Panne de climatisation en été",
      "Dégât des eaux",
      "Canalisation bouchée en urgence",
      "Coupure d'eau non planifiée",
    ],
  },
];
