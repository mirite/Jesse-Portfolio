import React from "react";
import { SkillSkeleton } from "@/lib/";
import { PillList } from "@/app/components/";

const LinkDisplay = (props: {
	links: Required<SkillSkeleton>["fields"]["projects"];
}) => {
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
