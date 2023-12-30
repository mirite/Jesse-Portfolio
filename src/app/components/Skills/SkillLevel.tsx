import { Skill as SkillType } from "@/types";
import React from "react";
import Skill from "@/app/components/Skills/Skill";
import PillList from "@/app/components/general/PillList";

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

        skill.fields.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  if (!filteredSkills.length) return <></>;
  return (
    <div>
      <h2 className="text-2xl">{label}</h2>
      <PillList>
        {filteredSkills.map((skill) => (
          <Skill key={skill.fields.name} {...skill} />
        ))}
      </PillList>
    </div>
  );
};

export default SkillLevel;
