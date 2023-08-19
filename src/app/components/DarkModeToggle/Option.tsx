import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OptionDefinition } from "@/app/components/DarkModeToggle/index";
import Button from "@/app/components/general/Button";

type OptionProps = OptionDefinition & {
  onClick: (e: React.MouseEvent) => void;
};

const Option = (props: OptionProps) => {
  const { label, icon, onClick, className } = props;
  const defaultOption = "defaultOption" in props;
  const id = useId();
  return (
    <li>
      <Button
        name={"darkModeToggle"}
        className="block w-full"
        id={id}
        onClick={(e) => onClick(e)}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />

          <div>{label}</div>
        </div>
      </Button>
    </li>
  );
};

export default Option;
