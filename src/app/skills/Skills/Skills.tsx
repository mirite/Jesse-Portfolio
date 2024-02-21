"use client";

import React from "react";
import { Skill, splitSkillsByProficiency } from "@/lib/";
import SkillLevel from "@/app/skills/Skills/SkillLevel";
import Search from "@/app/skills/Skills/Search";
import Legend from "@/app/skills/Skills/Legend";

interface Props {
	skills: Skill[];
}

const Skills = (props: Props) => {
	const { high, medium, starter } = splitSkillsByProficiency(props.skills);
	const skills = [...high, ...medium, ...starter];
	const [searchTerm, setSearchTerm] = React.useState("");
	const filteredSkills = !searchTerm
		? skills
		: skills.filter((skill) =>
				skill.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
	return (
		<div className="max-w-prose mx-auto my-4 flex flex-col gap-4 items-center">
			<div
				className={
					"flex flex-col-reverse md:flex-row gap-12 my-4 w-full justify-between"
				}
			>
				<Legend />
				<Search searchTerm={searchTerm} onChange={setSearchTerm} />
			</div>
			<SkillLevel skills={filteredSkills} />
		</div>
	);
};

export default Skills;
