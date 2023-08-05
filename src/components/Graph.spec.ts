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
				profileImage: "image",
				views: 500,
				subscribers: 150,
				favorites: 20,
				likes: 50,
				dislikes: 10,
				addons: [
					{
						id: 1,
						title: "Addon",
						image: "image",
						views: 250,
						subscribers: 75,
						favorites: 10,
						likes: 25,
						dislikes: 5,
						stars: 2,
					},
					{
						id: 2,
						title: "Addon 2",
						image: "image",
						views: 250,
						subscribers: 75,
						favorites: 10,
						likes: 25,
						dislikes: 5,
						stars: 4,
					},
				],
			},
		});
	});
});
