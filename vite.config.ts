import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: resolve("./src/components"),
		},
	},
	test: {
		environment: "jsdom",
		reporter: "verbose",
		coverage: {
			all: true,
			include: ["src/**/*.{js,ts,svelte}"],
		},
	},
};

export default config;
