import React from "react";
import { twMerge } from "tailwind-merge";

const TextWrapper = ({
	children,
	className: extendedClassName,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	const className = twMerge(
		"prose prose-neutral dark:prose-invert mx-auto",
		extendedClassName,
	);
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

export default TextWrapper;
