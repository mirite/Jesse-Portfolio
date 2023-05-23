import React from 'react';
import {Skill} from "@/types";
import styles from './Skill.module.css';
const Skill = (skill: Skill) => {
    return (
        <li className={styles.container}>
            {skill.name}
        </li>
    );
};

export default Skill;
