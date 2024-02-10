import Notification from "$lib/Notification.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

describe("Notification Component", () => {
	it("Renders", () => {
		render(Notification, { message: "Error Message" });
	});
});
