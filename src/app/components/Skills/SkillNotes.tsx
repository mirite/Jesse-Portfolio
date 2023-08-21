import React, { useEffect } from "react";
import { Skill } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "@/app/components/general/Button";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextWrapper from "@/app/components/general/TextWrapper";
import LinkDisplay from "@/app/components/Skills/LinkDisplay";

const SkillNotes = (props: Skill & { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm"
      onPress={props.onClose}
    >
      <div
        className="w-2/3 p-3 bg-white dark:bg-black rounded-md"
        onPress={(e) => e.stopPropagation()}
      >
        <Button
          className="leading-none p-1 float-right"
          onPress={props.onClose}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </Button>
        <TextWrapper>
          <div className="flex justify-between mb-2 items-start font-bold">
            <h3 className="prose-md">{props.name}</h3>
          </div>
          {props.notes && (
            <article>{documentToReactComponents(props.notes)}</article>
          )}
          {props.projects && <LinkDisplay links={props.projects} />}
        </TextWrapper>
      </div>
    </div>
  );
};

export default SkillNotes;