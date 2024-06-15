import type { ReactElement } from "react";
import React from "react";

import { PillList } from "@/app/components/";
import type { SkillSkeleton } from "@/lib/";

const LinkDisplay = (props: {
	links: Required<SkillSkeleton>["fields"]["projects"];
}): ReactElement => {
	return (
		<PillList>
			{Object.entries(props.links || {}).map(([name, link]) => (
				<li key={name}>
					<a href={link}>{name}</a>
				</li>
			))}
		</PillList>
	);
};

export default LinkDisplay;
