import {
	faGithub,
	faLinkedin,
	faNpm,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEmail } from "@fortawesome/free-solid-svg-icons";

import type { Social } from "./types";

export * from "./types";
export const socials: Social[] = [
	{
		icon: faGithub,
		link: "https://github.com/mirite",
		platform: "GitHub",
		username: "mirite",
	},
	{
		icon: faLinkedin,
		link: "https://www.linkedin.com/in/jesse-conner-24672741/",
		platform: "LinkedIn",
		username: "Jesse Conner",
	},
	{
		icon: faEmail,
		link: "mailto:me@jesseconner.ca",
		platform: "Email",
		username: "me@jesseconner.ca",
	},
	{
		icon: faNpm,
		link: "https://www.npmjs.com/~mirite",
		platform: "NPM",
		username: "mirite",
	},
	{
		icon: faStackOverflow,
		link: "https://stackoverflow.com/users/1727253/m-i-rite",
		platform: "StackOverflow",
		username: "m-i-rite",
	},
];
