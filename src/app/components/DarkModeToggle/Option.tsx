import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OptionDefinition } from "@/app/components/DarkModeToggle/index";

type OptionProps = OptionDefinition & {
  onClick: () => void;
};

const Option = (props: OptionProps) => {
  const { label, icon, onClick, className } = props;
  const defaultOption = "defaultOption" in props;
  const id = useId();
  return (
    <li>
      <input
        className="hidden"
        type={"radio"}
        name={"darkModeToggle"}
        value={className}
        id={id}
        onClick={onClick}
        defaultChecked={defaultOption}
      />
      <label htmlFor={id} className="flex items-center">
        <div className="w-8 flex justify-center">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>{label}</div>
      </label>
    </li>
  );
};

export default Option;
