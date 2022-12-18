import ErrorMessage from "$lib/ErrorMessage.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

describe("ErrorMessage Component", () => {
	it("Renders", () => {
		render(ErrorMessage, { message: "Error Message" });
	});
});
