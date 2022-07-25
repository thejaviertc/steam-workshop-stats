import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		appDir: "steam-workshop-stats/app",
		prerender: {
			default: true,
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
		}),
	},
	paths: {
		base:
			process.env.NODE_ENV === "development"
				? ""
				: "/steam-workshop-stats",
		asserts:
			process.env.NODE_ENV === "development"
				? ""
				: "/steam-workshop-stats",
	},
};

export default config;
