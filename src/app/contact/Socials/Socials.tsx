import React, { type HTMLAttributes, type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import { socials } from "@/lib/socials";

import Social from "./Social";

type SocialsProps = HTMLAttributes<HTMLUListElement> & {
	iconsOnly?: boolean;
};

const Socials = (props: SocialsProps): ReactElement => {
	const { className, iconsOnly, ...rest } = props;

	return (
		<ul
			className={twMerge("flex max-w-fit flex-col gap-1 p-0", className)}
			{...rest}
		>
			{socials.map((social) => {
				return (
					<Social iconsOnly={iconsOnly} key={social.platform} {...social} />
				);
			})}
		</ul>
	);
};

export default Socials;
