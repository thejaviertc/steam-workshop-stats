import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../pages/App";

describe("App Page", () => {
	test("Renders correctly", () => {
		render(<App />);
		expect(screen.getByText(/^Steam Workshop Stats$/i));
	});
});
