import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OptionDefinition } from "@/app/components/ThemeSelect/index";
import Button from "@/app/components/general/Button";

type OptionProps = OptionDefinition & {
  onPress: (e: React.MouseEvent) => void;
};

const Option = (props: OptionProps) => {
  const { label, icon, onPress, className } = props;
  const defaultOption = "defaultOption" in props;
  const id = useId();
  return (
    <li>
      <Button
        name={"darkModeToggle"}
        className="block w-full"
        id={id}
        onPress={(e) => onPress(e)}
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
