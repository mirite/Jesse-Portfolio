import type { ComponentProps, ReactElement } from "react";

import React from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div"> & {
	Element?: "footer" | "header" | "main" | "section";
};
const MaxWidthContainer = (props: Props): ReactElement => {
	const {
		children,
		className: extendedClassName,
		Element: substituteElement,
		...rest
	} = props;
	const className = twMerge(
		"mx-auto max-w-(--breakpoint-lg) px-3 xl:px-0",
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
