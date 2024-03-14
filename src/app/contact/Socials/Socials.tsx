import React from "react";
import { getEntries, SocialSkeleton } from "@/lib/";
import Social from "@/app/contact/Socials/Social";

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
