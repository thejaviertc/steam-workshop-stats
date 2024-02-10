import Addon from "$lib/Addon.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import "../i18n";

describe("Addon Component", () => {
	it("Renders", () => {
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
});
