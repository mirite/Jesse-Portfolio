import type { ReactElement } from "react";
import React from "react";

import type { SkillSkeleton } from "@/lib/";

const LinkDisplay = (props: {
	links: Required<SkillSkeleton>["fields"]["projects"];
}): ReactElement => {
	return (
		<div>
			<h4>Projects</h4>
			<ul>
				{Object.entries(props.links || {}).map(([name, link]) => (
					<li key={name}>
						<a href={link}>{name}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LinkDisplay;
