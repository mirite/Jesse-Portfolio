import type { ReactElement } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

const TextWrapper = ({
	children,
	className: extendedClassName,
	...props
}: React.HTMLAttributes<HTMLDivElement>): ReactElement => {
	const className = twMerge(
		"prose prose-blue-green dark:prose-invert px-3 md:px-0",
		extendedClassName,
	);
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

export default TextWrapper;
