import { Skill as SkillType } from "@/lib/";
import React from "react";
import Skill from "@/app/skills/Skills/Skill";

interface Props {
	skills: SkillType[];
	label: string;
	searchTerm: string;
}

const SkillLevel = (props: Props) => {
	const { skills, label, searchTerm } = props;
	const filteredSkills = !searchTerm
		? skills
		: skills.filter((skill) =>
				skill.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
	if (!filteredSkills.length) return <></>;
	return (
		<>
			{filteredSkills.map((skill) => (
				<Skill key={skill.name} {...skill} />
			))}
		</>
	);
};

export default SkillLevel;
