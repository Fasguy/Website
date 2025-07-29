import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const schema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	teaser: z.string().optional(),
	tags: z.array(z.string()).optional()
});

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts/` directory.
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: schema,
});

const vault = defineCollection({
	loader: glob({ base: './src/content/vault', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		id: z.number()
	})
});

export const collections = { posts, vault };
