import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default <Config>{
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
		"./content/**/*.md",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#722F37",
					light: "#8E3A44",
					dark: "#4A1E23",
				},
				surface: {
					DEFAULT: "#FAF8F0",
					dim: "#F0F0E7",
					dark: "#D8D6C9",
				},
				secondary: {
					DEFAULT: "#C8A843",
					light: "#EBC354",
					dark: "#A18536",
				},
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
			},
		},
	},
	plugins: [typography],
};
