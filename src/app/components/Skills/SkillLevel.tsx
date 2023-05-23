import {Skill as SkillType} from "@/types";
import React from "react";
import styles from "./SkillLevel.module.css";
import Skill from "@/app/components/Skills/Skill";

interface Props {
    skills: SkillType[];
    label: string;
    searchTerm: string;
}

const SkillLevel = (props: Props) => {
    const {skills, label, searchTerm} = props;
    const filteredSkills = !searchTerm
        ? skills
        : skills.filter(({name}) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    if (!filteredSkills.length) return <></>;
    return (
        <div>
            <h2>{label}</h2>
            <ul className={styles.list}>
                {filteredSkills.map((skill) => (
                    <Skill key={skill.name} {...skill}/>
                ))}
            </ul>
        </div>
    );
};

export default SkillLevel;
