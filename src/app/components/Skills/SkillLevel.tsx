import { Skill as SkillType } from "@/types";
import React from "react";
import Skill from "@/app/components/Skills/Skill";

interface Props {
  skills: SkillType[];
  label: string;
  searchTerm: string;
}

const SkillLevel = (props: Props) => {
  const { skills, label, searchTerm } = props;
  const filteredSkills = !searchTerm
    ? skills
    : skills.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  if (!filteredSkills.length) return <></>;
  return (
    <div>
      <h2 className="text-2xl">{label}</h2>
      <ul className="flex flex-wrap p-1 gap-x-3 gap-y-1 justify-center">
        {filteredSkills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </ul>
    </div>
  );
};

export default SkillLevel;
