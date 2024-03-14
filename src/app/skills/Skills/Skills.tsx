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
		<div className="mx-auto my-4 flex max-w-prose flex-col items-center gap-4">
			<div
				className={
					"my-4 flex w-full flex-col-reverse justify-between gap-12 md:flex-row"
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
