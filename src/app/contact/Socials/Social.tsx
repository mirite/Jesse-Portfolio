import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type ReactElement } from "react";

import type { Social } from "@/lib/socials";

type Props = Social & {
	iconsOnly: boolean | undefined;
};

const Social = (social: Props): ReactElement => {
	const { icon, iconsOnly, link, platform, username } = social;
	return (
		<li>
			<a
				className="flex items-center justify-start gap-2"
				href={link}
				rel="noopener noreferrer"
				target="_blank"
			>
				{icon ? (
					<FontAwesomeIcon className="text-xl" icon={icon} title={platform} />
				) : null}
				{!icon && <span>{platform}</span>}
				{!iconsOnly && <span>{username}</span>}
			</a>
		</li>
	);
};

export default Social;
