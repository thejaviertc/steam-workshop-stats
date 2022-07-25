import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render, screen } from "@testing-library/react";
import React from "react";
import Badge from "../components/Badge";

describe("Badge Component", () => {
	test("Renders correctly", () => {
		render(
			<Badge
				icon={<FontAwesomeIcon icon={faCode} />}
				title="ReactJS"
				type="primary"
			/>
		);
		expect(screen.getByText(/ReactJS/));
	});
});
