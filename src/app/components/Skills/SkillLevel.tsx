import {Skill} from "@/types";
import {splitSkillsByProficiency} from "@/app/helpers/skills";
import React from "react";

interface Props {
    skills: Skill[];
    label: string;
    searchTerm: string;
}

const SkillLevel = (props: Props) => {
    const {skills, label, searchTerm} = props;
    const filteredSkills = !searchTerm ? skills : skills.filter(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()));
    if(!filteredSkills.length) return <></>;
    return (
        <div>
            <h2>{label}</h2>
            <ul>
                {filteredSkills.map(skill => <li key={skill.name}>{skill.name}</li>)}
            </ul>
        </div>
    );
};

export default SkillLevel;
