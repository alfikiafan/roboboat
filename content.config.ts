import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "**/*.md",
			schema: z
				.object({
					tags: z.array(z.string()).optional(),
					image: z.string().optional(),
					author: z.string().optional(),
					date: z.string().optional(),
					title: z.string().optional(),
					description: z.string().optional(),
				})
				.passthrough(),
		}),
	},
});
