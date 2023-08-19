import React, { useState } from "react";
import { Skill } from "@/types";
import styles from "./Skill.module.css";
import SkillNotes from "@/app/components/Skills/SkillNotes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/app/components/general/Button";
const Skill = (skill: Skill) => {
  const { name, notes } = skill;
  const [showing, setShowing] = useState(false);

  if (hasNotes(skill)) {
    return (
      <>
        <Button onClick={() => setShowing(true)}>
          <span className="mr-1">{name}</span>
          <FontAwesomeIcon icon={faCommentDots} />
        </Button>
        {showing && <SkillNotes {...skill} onClose={() => setShowing(false)} />}
      </>
    );
  }
  return <div className="pill">{name}</div>;
};

export default Skill;

function hasNotes(skill: Skill): skill is Required<Skill> {
  return skill.notes !== undefined;
}
