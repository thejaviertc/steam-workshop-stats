import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		appDir: "app",
		prerender: {
			default: true,
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
		}),
		paths: {
			base:
				process.env.NODE_ENV === "development"
					? ""
					: "/steam-workshop-stats",
		},
	},
};

export default config;
