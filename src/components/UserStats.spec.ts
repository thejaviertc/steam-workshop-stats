import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import "../i18n";

import UserStats from "./UserStats.svelte";

describe("UserStats Component", () => {
	it("Renders", () => {
		render(UserStats, {
			steamUser: {
				steamId: "STEAMID64",
				username: "javiertc",
				profileImageUrl: "image",
				views: 500,
				subscribers: 150,
				favorites: 20,
				likes: 50,
				dislikes: 10,
				addons: [
					{
						id: 1,
						title: "Addon",
						imageUrl: "image",
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
						imageUrl: "image",
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
