import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "../components/Card";

describe("Badge Component", () => {
	test("Renders correctly", () => {
		render(
			<Card
				id={1}
				title="Addon"
				image="https://steamuserimages-a.akamaihd.net/ugc/1699528882257864537/ECFD11D2028D01BEBDC91F9599F17544ADF4D0D7/"
				url="https://steamcommunity.com/sharedfiles/filedetails/?id=2535605925"
				viewers={100}
				subs={100}
				lifeSubs={100}
				favs={100}
				lifeFavs={100}
				likes={100}
				dislikes={100}
			/>
		);
		expect(screen.getByText(/Addon/));
	});
});
