import React, { useEffect } from "react";
import { Skill } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SkillNotes = (props: Required<Skill> & { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm"
      onClick={props.onClose}
    >
      <div
        className="w-2/3 p-3 bg-white dark:bg-black rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-2">
          <h3>{props.name}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        <p>{documentToReactComponents(props.notes)}</p>
      </div>
    </div>
  );
};

export default SkillNotes;
