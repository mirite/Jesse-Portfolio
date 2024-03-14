import React from "react";

const Legend = () => {
	return (
		<div>
			<h3 className={"mb-1"}>Legend</h3>
			<ul className={"m-0 flex items-center gap-2 p-0"}>
				<li className={"m-0 flex items-center gap-2 p-0"}>
					<div className={"m-0 h-2 w-2 bg-high"}></div>High
				</li>
				<li className={"m-0 flex items-center gap-2 p-0"}>
					<div className={"m-0 h-2 w-2 bg-medium"}></div>
					Medium
				</li>
				<li className={"m-0 flex items-center gap-2 p-0"}>
					<div className={"m-0 h-2 w-2 bg-starter"}></div>
					Starter
				</li>
			</ul>
		</div>
	);
};

export default Legend;
