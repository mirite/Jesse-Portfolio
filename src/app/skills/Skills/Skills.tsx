"use client";

import React from "react";
import { Skill, splitSkillsByProficiency } from "@/lib/";
import SkillLevel from "@/app/skills/Skills/SkillLevel";
import Search from "@/app/skills/Skills/Search";
import { PillList } from "@/app/components";
import Legend from "@/app/skills/Skills/Legend";

interface Props {
	skills: Skill[];
}

const Skills = (props: Props) => {
	const { high, medium, starter } = splitSkillsByProficiency(props.skills);
	const [searchTerm, setSearchTerm] = React.useState("");
	return (
		<div className="max-w-prose mx-auto my-2 flex flex-col gap-4 items-center">
			<div className={"flex flex-col-reverse md:flex-row gap-2 w-full"}>
				<Legend />
				<Search searchTerm={searchTerm} onChange={setSearchTerm} />
			</div>
			<PillList>
				<SkillLevel skills={high} label="High" searchTerm={searchTerm} />
				<SkillLevel skills={medium} label="Medium" searchTerm={searchTerm} />
				<SkillLevel skills={starter} label="Starter" searchTerm={searchTerm} />
			</PillList>
		</div>
	);
};

export default Skills;
