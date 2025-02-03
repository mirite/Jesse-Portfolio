import type { ReactElement } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TextWrapper } from "@/app/components";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

const PageWrapper = ({
	children,
	title,
	className: extendedClassName,
	...rest
}: React.HTMLAttributes<HTMLDivElement> & { title: string }): ReactElement => {
	const className = twMerge("grow", extendedClassName);
	return (
		<MaxWidthContainer className={className} Element={"main"} {...rest}>
			<TextWrapper className={"mx-auto mb-4"}>
				<h1 className={"text-center text-balance"}>{title}</h1>
			</TextWrapper>
			{children}
		</MaxWidthContainer>
	);
};

export default PageWrapper;
