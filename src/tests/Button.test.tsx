import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

describe("Button Component", () => {
	test("Renders correctly", () => {
		render(
			<Button
				icon={<FontAwesomeIcon icon={faGithub} />}
				text="Github"
				link="https://github.com/thejaviertc/steam-workshop-stats"
			/>
		);
		expect(screen.getByText(/Github/));
	});
});
