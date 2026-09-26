import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const realisations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/realisations" }),
  schema: z.object({
    titre: z.string(),
    lieu: z.string(),
    categorie: z.string(),
    imageAvant: z.string(),
    imageApres: z.string(),
  }),
});

export const collections = { realisations };
