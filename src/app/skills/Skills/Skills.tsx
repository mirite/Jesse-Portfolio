"use client";

import type { ReactElement } from "react";

import React from "react";

import type { Skill } from "@/lib/skills";

import Legend from "@/app/skills/Skills/Legend";
import Search from "@/app/skills/Skills/Search";
import SkillLevel from "@/app/skills/Skills/SkillLevel";

interface Props {
	skills: Skill[];
}

const Skills = (props: Props): ReactElement => {
	const { skills } = props;
	const [searchTerm, setSearchTerm] = React.useState("");
	const filteredSkills = !searchTerm
		? skills
		: skills.filter((skill) =>
				skill.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
	return (
		<div className="mx-auto my-8 flex max-w-prose flex-col items-center gap-4">
			<Search onChange={setSearchTerm} searchTerm={searchTerm} />
			<Legend />
			<SkillLevel skills={filteredSkills} />
		</div>
	);
};

export default Skills;
