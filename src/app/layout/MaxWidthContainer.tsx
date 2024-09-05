import type { ComponentProps, ReactElement } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div"> & {
	Element?: "footer" | "header" | "main" | "section";
};
const MaxWidthContainer = (props: Props): ReactElement => {
	const {
		className: extendedClassName,
		children,
		Element: substituteElement,
		...rest
	} = props;
	const className = twMerge(
		"max-w-screen-lg w-full px-3 xl:px-0 mx-auto",
		extendedClassName,
	);
	const Element = substituteElement || "div";
	return (
		<Element className={className} {...rest}>
			{children}
		</Element>
	);
};

export default MaxWidthContainer;
