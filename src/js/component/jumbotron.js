import React from "react";

//include images into your bundle

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warn Welcome</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p />
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to accion!
			</a>
		</div>
	);
}
