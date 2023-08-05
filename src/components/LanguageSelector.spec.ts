import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import "../i18n";
import LanguageSelector from "./LanguageSelector.svelte";

describe("LanguageSelector Component", () => {
	it("Renders", () => {
		render(LanguageSelector);
	});
});
