import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/blog" }),
    schema: z.object({
        create: z.date(),
        update: z.date().nullable(),
        title: z.string(),
        caption: z.string().nullable(),
        description: z.string(),
        thumbnail: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog: blogCollection,
};
