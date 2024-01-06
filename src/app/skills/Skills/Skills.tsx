"use client";

import React from "react";
import { Skill, splitSkillsByProficiency } from "@/lib/";
import SkillLevel from "@/app/skills/Skills/SkillLevel";
import Search from "@/app/skills/Skills/Search";

interface Props {
  skills: Skill[];
}

const Skills = (props: Props) => {
  const { high, medium, starter } = splitSkillsByProficiency(props.skills);
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="max-w-prose mx-auto my-2">
      <Search searchTerm={searchTerm} onChange={setSearchTerm} />
      <SkillLevel skills={high} label="High" searchTerm={searchTerm} />
      <SkillLevel skills={medium} label="Medium" searchTerm={searchTerm} />
      <SkillLevel skills={starter} label="Starter" searchTerm={searchTerm} />
    </div>
  );
};

export default Skills;
