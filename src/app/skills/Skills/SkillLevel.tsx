import { Skill as SkillType } from "@/lib/";
import React from "react";
import Skill from "@/app/skills/Skills/Skill";
import { PillList } from "@/app/components/";

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
    <div>
      <h2 className="text-2xl">{label}</h2>
      <PillList>
        {filteredSkills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </PillList>
    </div>
  );
};

export default SkillLevel;
