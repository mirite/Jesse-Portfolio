import type { ReactElement } from "react";

import React from "react";

const Legend = (): ReactElement => {
	return (
		<div>
			<h3 className={"mb-1"}>Legend</h3>
			<ul className={"m-0 flex items-center gap-2 p-0"}>
				<li className={"m-0 flex items-center gap-2 p-0"}>
					<div className={"m-0 size-2 bg-high"} />
					High
				</li>
				<li className={"m-0 flex items-center gap-2 p-0"}>
					<div className={"m-0 size-2 bg-medium"} />
					Medium
				</li>
				<li className={"m-0 flex items-center gap-2 p-0"}>
					<div className={"m-0 size-2 bg-starter"} />
					Starter
				</li>
			</ul>
		</div>
	);
};

export default Legend;
