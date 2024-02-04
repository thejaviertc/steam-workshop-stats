import { faEye } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import StatTitle from "./StatTitle.svelte";

describe("StatTitle Component", () => {
	it("Renders", () => {
		render(StatTitle, { title: "Views", faIcon: faEye, value: 100 });
	});
});
