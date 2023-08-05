import { faEye } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Stat from "./Stat.svelte";

describe("Stat Component", () => {
	it("Renders", () => {
		render(Stat, { title: "Views", faIcon: faEye, value: 100 });
	});
});
