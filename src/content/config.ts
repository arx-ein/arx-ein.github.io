import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        create: z.date(),
        update: z.date().nullable(),
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog: blogCollection,
};
