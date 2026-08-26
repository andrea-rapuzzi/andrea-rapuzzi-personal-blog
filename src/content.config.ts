import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    author: z.string().optional().default('Andrea Rapuzzi'),
    tags: z.array(z.string()).optional().default([]),
    image: z.object({
      url: z.string().optional().default(''),
      alt: z.string().optional().default(''),
    }).optional(),
  }),
});

export const collections = { posts };
