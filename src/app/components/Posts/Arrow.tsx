import type { ReactElement } from "react";

import React from "react";

const Arrow = (): ReactElement => {
	const className =
		"hidden starting:opacity-0 transition-opacity duration-1000 stroke-(--tw-prose-links) group-hover:block group-hover:motion-reduce:animate-none";
	return (
		<svg height={32} viewBox={"0 0 500 500"} width={32}>
			<line
				className={className + " group-hover:animate-arrow"}
				strokeWidth={40}
				x1={0}
				x2={330}
				y1={250}
				y2={250}
			/>
			<line
				className={className + " group-hover:animate-head"}
				strokeWidth={40}
				x1={350}
				x2={250}
				y1={250}
				y2={150}
			/>
			<line
				className={className + " group-hover:animate-head"}
				strokeWidth={40}
				x1={350}
				x2={250}
				y1={250}
				y2={350}
			/>
		</svg>
	);
};

export default Arrow;
