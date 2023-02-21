import Button from "$lib/Button.svelte";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

describe("Button Component", () => {
	it("Renders", () => {
		render(Button, {
			faIcon: faGithub,
			text: "Github",
			link: "https://github.com/thejaviertc/steam-workshop-stats",
		});
	});
});
