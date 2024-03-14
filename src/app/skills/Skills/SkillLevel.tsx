import { Skill as SkillType } from "@/lib/";
import React from "react";
import Skill from "@/app/skills/Skills/Skill";

interface Props {
	skills: SkillType[];
}

const SkillLevel = (props: Props) => {
	const { skills } = props;
	return (
		//bg-gradient-to-br from-high to-starter via-medium
		<ul className={`flex flex-wrap justify-start gap-2 p-1`}>
			{skills.map((skill) => (
				<Skill key={skill.name} {...skill} />
			))}
		</ul>
	);
};

export default SkillLevel;
