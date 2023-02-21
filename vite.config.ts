import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ["src/tests/**"],
		environment: "jsdom",
		reporter: "verbose",
		coverage: {
			all: true,
			include: ["src/**/*.{js,ts,svelte}"],
		},
	},
};

export default config;
