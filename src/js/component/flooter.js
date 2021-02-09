import React from "react";

//include images into your bundle

//create your first component
export function Flooter() {
	return (
		<footer className="footer mt-auto py-3 bg-dark text-light text-center">
			{" "}
			<div className="container">
				{" "}
				<span>Place sticky footer content here.</span>{" "}
			</div>{" "}
		</footer>
	);
}
