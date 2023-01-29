import Badge from "$lib/Badge.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import { faEye } from "@fortawesome/free-solid-svg-icons";

describe("Badge Component", () => {
	it("Renders", () => {
		render(Badge, { faIcon: faEye, title: "Title", type: "bg-green-500" });
	});
});