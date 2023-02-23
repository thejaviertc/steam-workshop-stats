/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				steam: {
					"primary": "#1b2838",
					"secondary": "#171a21",
					"accent": "#38bdf8",
					"neutral": "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
};
