// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },

	modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon"],

	content: {
		build: {
			markdown: {
				highlight: {
					theme: "github-light",
				},
			},
		},
	},

	app: {
		head: {
			title: "Bengawan UV - Roboboat Team UNS",
			meta: [
				{
					name: "description",
					content:
						"Official website of Bengawan UV, Universitas Sebelas Maret. Engineering autonomous surface vehicles for Roboboat 2026 Florida.",
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ charset: "utf-8" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},

	tailwindcss: {
		cssPath: "~/assets/css/main.css",
		configPath: "tailwind.config.ts",
	},
});
