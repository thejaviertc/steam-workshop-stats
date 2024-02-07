import { faEye } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import StatBadge from "$components/StatBadge.svelte";

describe("StatBadge Component", () => {
	it("Renders", () => {
		render(StatBadge, { faIcon: faEye, value: 4 });
	});
});
