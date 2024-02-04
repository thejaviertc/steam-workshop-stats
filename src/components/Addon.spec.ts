import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import "../i18n";

import Addon from "$components/Addon.svelte";

describe("Addon Component", () => {
	it("Renders an addon with no stars", () => {
		render(Addon, {
			id: 1,
			title: "Addon",
			image: "image",
			views: 50,
			subscribers: 5,
			favorites: 2,
			likes: 5,
			dislikes: 2,
			stars: 0,
		});
	});

	it("Renders an addon with stars", () => {
		render(Addon, {
			id: 2,
			title: "Addon 2",
			image: "image",
			views: 125,
			subscribers: 50,
			favorites: 10,
			likes: 25,
			dislikes: 5,
			stars: 3,
		});
	});
});
