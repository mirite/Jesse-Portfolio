import type { ReactElement } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

const TextWrapper = ({
	children,
	className: extendedClassName,
	...props
}: React.HTMLAttributes<HTMLDivElement>): ReactElement => {
	const className = twMerge(
		"prose px-3 prose-blue-green md:px-0 dark:prose-invert",
		extendedClassName,
	);
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

export default TextWrapper;
