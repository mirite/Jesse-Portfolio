import React, { useEffect, useRef } from "react";
import { OptionDefinition, options, updateTheme } from "@/lib/";
import Option from "@/app/layout/Header/ThemeSelect/Option";

type Props = {
  onChange: (newTheme: OptionDefinition) => void;
  onClose: () => void;
};

const ThemeSelectModal = (props: Props) => {
  const modalRef = useRef<HTMLUListElement>(null); // Ref to store the modal

  useEffect(() => {
    updateTheme();
    const handleBodyClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.onClose();
      }
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => document.body.removeEventListener("click", handleBodyClick); // Cleanup listener on unmount
  }, [props]);
  return (
    <ul className="fixed top-0 right-2" ref={modalRef}>
      {options.map((option) => (
        <Option
          key={option.label}
          {...option}
          onPress={() => props.onChange(option)}
        />
      ))}
    </ul>
  );
};

export default ThemeSelectModal;