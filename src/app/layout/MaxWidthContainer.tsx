import type { ComponentProps, ReactElement } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div">;
const MaxWidthContainer = (props: Props): ReactElement => {
	const { className: extendedClassName, children, ...rest } = props;
	const className = twMerge(
		"max-w-screen-xl w-full px-3 xl:px-0 mx-auto",
		extendedClassName,
	);
	return (
		<div className={className} {...rest}>
			{children}
		</div>
	);
};

export default MaxWidthContainer;
