import React from "react";

const PillList = ({
	children,
	className,
	...rest
}: React.HTMLAttributes<HTMLUListElement>) => {
	return (
		<ul
			className={
				"flex flex-wrap justify-start gap-2 bg-gradient-to-br from-high to-starter p-1 " +
				className
			}
			{...rest}
		>
			{children}
		</ul>
	);
};

export default PillList;
