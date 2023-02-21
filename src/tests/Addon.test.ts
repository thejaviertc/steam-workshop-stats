import Addon from "$lib/Addon.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import "../i18n";

describe("Addon Component", () => {
	it("Renders", () => {
		render(Addon, {
			title: "Addon",
			image: "image",
			url: "https://addon.com",
			viewers: 50,
			subs: 5,
			lifeSubs: 7,
			favs: 2,
			lifeFavs: 3,
			likes: 5,
			dislikes: 2,
		});
	});
});
