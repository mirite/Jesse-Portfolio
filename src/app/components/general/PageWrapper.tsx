import React from "react";
import { twMerge } from "tailwind-merge";
import { TextWrapper } from "@/app/components";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

const PageWrapper = ({
	children,
	title,
	className: extendedClassName,
	...rest
}: React.HTMLAttributes<HTMLDivElement> & { title: string }) => {
	const className = twMerge("grow w-full", extendedClassName);
	return (
		<main className={"w-full grow"} {...rest}>
			<MaxWidthContainer className={className}>
				<TextWrapper className={"mb-4"}>
					<h1 className="text-center">{title}</h1>
				</TextWrapper>
				{children}
			</MaxWidthContainer>
		</main>
	);
};

export default PageWrapper;
