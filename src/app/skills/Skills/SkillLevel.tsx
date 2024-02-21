import { Skill as SkillType } from "@/lib/";
import React from "react";
import Skill from "@/app/skills/Skills/Skill";

interface Props {
	skills: SkillType[];
}

const SkillLevel = (props: Props) => {
	const { skills } = props;
	const stop1 = skills.findIndex((skill) => skill.proficiency === "medium");
	const stop2 = skills.findIndex((skill) => skill.proficiency === "starter");
	const mid = Math.round(((stop1 + (stop2 - stop1) / 2) / skills.length) * 100);
	return (
		//bg-gradient-to-br from-high to-starter via-medium
		<ul
			className={`flex flex-wrap p-1 gap-2 justify-start`}
			style={{ "--tw-gradient-via-position": `${mid}%` }}
		>
			{skills.map((skill) => (
				<Skill key={skill.name} {...skill} />
			))}
		</ul>
	);
};

export default SkillLevel;
