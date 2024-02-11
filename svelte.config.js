import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ postcss: true }),
	kit: {
		appDir: "app",
		adapter: adapter({
			pages: "build",
			assets: "build",
			strict: false,
			fallback: "404.html",
		}),
		alias: {
			$components: "src/components",
			$lib: "src/lib",
		},
		paths: {
			assets: "https://thejaviertc.github.io/steam-workshop-stats",
			base: "/steam-workshop-stats",
		},
	},
};

export default config;
