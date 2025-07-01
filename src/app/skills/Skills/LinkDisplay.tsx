import type { ReactElement } from "react";

import React from "react";

type Props = {
	links: string[]; // Required<SkillSkeleton>["fields"]["projects"];
};

const LinkDisplay = (props: Props): ReactElement => {
	return (
		<div>
			<h4>Projects</h4>
			<ul>
				{props.links.map((link) => (
					<li key={link}>
						<a href={link}>{link}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LinkDisplay;
