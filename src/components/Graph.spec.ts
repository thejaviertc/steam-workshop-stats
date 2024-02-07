import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import "../i18n";
import Graph from "./Graph.svelte";

describe("Graph Component", () => {
	it("Renders", () => {
		render(Graph, {
			steamUser: {
				steamId: "STEAMID64",
				username: "javiertc",
				profileImageUrl: "image",
				views: 125,
				subscribers: 121,
				favorites: 15,
				likes: 25,
				dislikes: 5,
				addons: [
					{
						id: 1,
						title: "Addon",
						imageUrl: "image",
						views: 125,
						subscribers: 121,
						favorites: 15,
						likes: 25,
						dislikes: 5,
						stars: 4,
					},
				],
			},
		});
	});
});
