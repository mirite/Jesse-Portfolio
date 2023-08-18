"use client";
import React, { useState } from "react";
import Option from "@/app/components/DarkModeToggle/Option";
import { faSun, faMoon, faDisplay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = [
  { label: "Light", icon: faSun, className: "light" },
  { label: "Dark", icon: faMoon, className: "dark" },
  { label: "System", icon: faDisplay, className: "", defaultOption: true },
] as const;

export type OptionDefinition = (typeof options)[number];
type OptionIcon = OptionDefinition["icon"];
const Index = () => {
  const handleChange = (e: OptionDefinition) => {
    const mode = e.className;
    options
      .filter((option) => option.className && option.className !== mode)
      .forEach((option) => document.body.classList.remove(option.className));
    if (mode) {
      document.body.classList.add(mode);
    }
    setModalActive(false);
    setCurrentMode(e.icon);
  };

  const [modalActive, setModalActive] = useState(false);
  const [currentMode, setCurrentMode] = useState<OptionIcon>(faDisplay);
  return (
    <div className="relative w-12">
      {modalActive ? (
        <ul className="absolute">
          {options.map((option, index) => (
            <Option key={index} {...option} onClick={()=>handleChange(option)} />
          ))}
        </ul>
      ) : (
        <button onClick={() => setModalActive(true)}>
          <FontAwesomeIcon icon={currentMode} />
        </button>
      )}
    </div>
  );
};

export default Index;
