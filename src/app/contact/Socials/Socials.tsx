import React from "react";
import { getEntries, SocialSkeleton } from "@/lib/";
import Social from "@/app/contact/Socials/Social";

const Socials = async () => {
	const socials = await getEntries<SocialSkeleton>("social");
	return (
		<ul className="flex flex-col p-0 max-w-fit">
			{socials.map((social) => {
				return <Social key={social.platform} {...social} />;
			})}
		</ul>
	);
};

export default Socials;
