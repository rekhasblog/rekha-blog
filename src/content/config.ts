import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };