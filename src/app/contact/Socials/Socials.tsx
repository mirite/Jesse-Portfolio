import React, { type HTMLAttributes, type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import { socials } from "@/lib/socials";

import Social from "./Social";

type SocialsProps = {
	iconsOnly?: boolean;
} & HTMLAttributes<HTMLUListElement>;

const Socials = async (props: SocialsProps): Promise<ReactElement> => {
	const { iconsOnly, className, ...rest } = props;

	return (
		<ul
			className={twMerge("flex max-w-fit flex-col gap-1 p-0", className)}
			{...rest}
		>
			{socials.map((social) => {
				return (
					<Social key={social.platform} iconsOnly={iconsOnly} {...social} />
				);
			})}
		</ul>
	);
};

export default Socials;
