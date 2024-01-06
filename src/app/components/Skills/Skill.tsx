import React, { useState } from "react";
import { Skill as SkillType } from "@/types";
import SkillNotes from "@/app/components/Skills/SkillNotes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/app/components/general/Button";
const Skill = (skill: SkillType) => {
  const { name, notes } = skill;
  const [showing, setShowing] = useState(false);

  if (hasNotesOrLinks(skill)) {
    return (
      <>
        <Button onPress={() => setShowing(true)}>
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

function hasNotesOrLinks(skill: SkillType) {
  return skill.notes !== undefined || skill.projects !== undefined;
}
