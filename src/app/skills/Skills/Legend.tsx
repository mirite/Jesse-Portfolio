import React from "react";
import { TextWrapper } from "@/app/components";

const Legend = () => {
	return (
		<TextWrapper>
			<h3>Legend</h3>
			<ul>
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
		</TextWrapper>
	);
};

export default Legend;
