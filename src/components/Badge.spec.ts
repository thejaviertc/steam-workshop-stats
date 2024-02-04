import { faEye } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import Badge from "$components/Badge.svelte";

describe("Badge Component", () => {
	it("Renders", () => {
		render(Badge, { faIcon: faEye, value: 4 });
	});
});
