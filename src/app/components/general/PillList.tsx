import React from "react";

const PillList = ({
	children,
	className,
	...rest
}: React.HTMLAttributes<HTMLUListElement>) => {
	return (
		<ul
			className={
				"flex bg-gradient-to-br from-high to-starter flex-wrap p-1 gap-2 justify-start " +
				className
			}
			{...rest}
		>
			{children}
		</ul>
	);
};

export default PillList;
