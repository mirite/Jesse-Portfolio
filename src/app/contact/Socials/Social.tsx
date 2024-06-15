import React from "react";

import type { Social } from "@/lib";

const Social = (social: Social) => {
	return (
		<li className="flex justify-between">
			<span className="mr-3">
				<strong>{social.platform}</strong>:
			</span>
			<a href={social.link} target="_blank" rel="noopener noreferrer">
				{social.username}
			</a>
		</li>
	);
};

export default Social;
