import React, { type HTMLAttributes, type ReactElement } from "react";

import Social from "@/app/contact/Socials/Social";
import type { Social as SocialType } from "@/lib/";
import {
	faGithub,
	faLinkedin,
	faNpm,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEmail } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

type SocialsProps = {
	iconsOnly?: boolean;
} & HTMLAttributes<HTMLUListElement>;

const Socials = async (props: SocialsProps): Promise<ReactElement> => {
	const { iconsOnly, className, ...rest } = props;

	const socials: SocialType[] = [
		{
			platform: "GitHub",
			username: "mirite",
			link: "https://github.com/mirite",
			icon: faGithub,
		},
		{
			platform: "LinkedIn",
			username: "Jesse Conner",
			link: "https://www.linkedin.com/in/jesse-conner-24672741/",
			icon: faLinkedin,
		},
		{
			platform: "Email",
			username: "me@jesseconner.ca",
			link: "mailto:me@jesseconner.ca",
			icon: faEmail,
		},
		{
			platform: "NPM",
			username: "mirite",
			link: "https://www.npmjs.com/~mirite",
			icon: faNpm,
		},
		{
			platform: "StackOverflow",
			username: "m-i-rite",
			link: "https://stackoverflow.com/users/1727253/m-i-rite",
			icon: faStackOverflow,
		},
	];
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
