import React from "react";

const Legend = () => {
	return (
		<div>
			<h3 className={"mb-1"}>Legend</h3>
			<ul className={"p-0 m-0 flex items-center gap-2"}>
				<li className={"flex gap-2 items-center p-0 m-0"}>
					<div className={"bg-high w-2 h-2 m-0"}></div>High
				</li>
				<li className={"flex gap-2 items-center p-0 m-0"}>
					<div className={"bg-medium w-2 h-2 m-0"}></div>
					Medium
				</li>
				<li className={"flex gap-2 items-center p-0 m-0"}>
					<div className={"bg-starter w-2 h-2 m-0"}></div>
					Starter
				</li>
			</ul>
		</div>
	);
};

export default Legend;
