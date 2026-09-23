import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectBlock = z.object({
	title: z.string(),
	lead: z.string(),
	points: z.array(z.string()),
	close: z.string(),
	images: z.array(z.string()),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number(),
		hero: z.string(),
		service: z.string(),
		industry: z.string(),
		year: z.string(),
		workflow: z.string(),
		goal: projectBlock,
		results: projectBlock,
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.string(),
		image: z.string(),
	}),
});

export const collections = { projects, blog };
