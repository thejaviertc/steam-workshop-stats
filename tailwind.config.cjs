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
					"primary": "#1B2838",
					"secondary": "#171A21",
					"accent": "#38BDf8",
					"neutral": "#3D4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
	safelist: ["bg-primary", "bg-secondary", "btn-primary", "btn-secondary"],
};
