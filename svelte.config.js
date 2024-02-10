import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ postcss: true }),
	kit: {
		appDir: "app",
		adapter: adapter({
			strict: false,
			fallback: "404.html",
		}),
		alias: {
			$components: "src/components",
			$lib: "src/lib",
		},
	},
};

export default config;
