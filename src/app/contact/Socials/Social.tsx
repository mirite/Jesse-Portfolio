import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type ReactElement } from "react";

import type { Social } from "@/lib/socials";

type Props = Social & {
	iconsOnly: boolean | undefined;
};

const Social = (social: Props): ReactElement => {
	const { platform, username, link, icon, iconsOnly } = social;
	return (
		<li>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-start gap-2"
			>
				{icon ? (
					<FontAwesomeIcon icon={icon} className="text-xl" title={platform} />
				) : null}
				{!icon && <span>{platform}</span>}
				{!iconsOnly && <span>{username}</span>}
			</a>
		</li>
	);
};

export default Social;
