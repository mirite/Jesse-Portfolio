import React from "react";

import Social from "@/app/contact/Socials/Social";
import type { SocialSkeleton } from "@/lib/";
import { getEntries } from "@/lib/";

const Socials = async () => {
	const socials = await getEntries<SocialSkeleton>("social");
	return (
		<ul className="flex max-w-fit flex-col p-0">
			{socials.map((social) => {
				return <Social key={social.platform} {...social} />;
			})}
		</ul>
	);
};

export default Socials;
