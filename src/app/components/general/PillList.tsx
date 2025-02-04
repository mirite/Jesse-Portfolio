import type { ReactElement } from "react";
import React from "react";

const PillList = ({
	children,
	className,
	...rest
}: React.HTMLAttributes<HTMLUListElement>): ReactElement => {
	return (
		<ul
			className={
				"from-high to-starter flex flex-wrap justify-start gap-2 bg-linear-to-br p-1 " +
				className
			}
			{...rest}
		>
			{children}
		</ul>
	);
};

export default PillList;
