import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    postDate: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string())
  })
})

export const collections = {
  projects: projectsCollection
}