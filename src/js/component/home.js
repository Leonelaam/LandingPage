import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Flooter } from "./flooter";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<Flooter />
		</div>
	);
}
