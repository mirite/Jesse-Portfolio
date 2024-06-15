import type { ComponentProps } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div">;
const MaxWidthContainer = (props: Props) => {
	const { className: extendedClassName, children, ...rest } = props;
	const className = twMerge(
		"max-w-screen-2xl w-full px-3 mx-auto",
		extendedClassName,
	);
	return (
		<div className={className} {...rest}>
			{children}
		</div>
	);
};

export default MaxWidthContainer;
