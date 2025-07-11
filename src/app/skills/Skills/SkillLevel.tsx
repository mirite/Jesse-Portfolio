import type { ReactElement } from "react";

import React from "react";

import type { Skill as SkillType } from "@/lib/skills";

import Skill from "@/app/skills/Skills/Skill";

interface Props {
	skills: SkillType[];
}

const SkillLevel = (props: Props): ReactElement => {
	const { skills } = props;
	return (
		//bg-linear-to-br from-high to-starter via-medium
		<ul className={`flex flex-wrap justify-center gap-2 p-1`}>
			{skills.map((skill) => (
				<Skill key={skill.name} {...skill} />
			))}
		</ul>
	);
};

export default SkillLevel;
