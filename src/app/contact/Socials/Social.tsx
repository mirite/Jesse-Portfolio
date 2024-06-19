import React, { type ReactElement } from "react";

import type { Social } from "@/lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = (social: Social): ReactElement => {
	const { platform, username, link, icon } = social;
	return (
		<li className="flex items-center justify-start gap-2">
			{icon && (
				<FontAwesomeIcon icon={icon} className={"size-4"} title={platform} />
			)}
			{!icon && <span>{platform}</span>}
			<a href={link} target="_blank" rel="noopener noreferrer">
				{username}
			</a>
		</li>
	);
};

export default Social;
