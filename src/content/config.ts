import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string())
  })
})

export const collections = {
  projects: projectsCollection
}