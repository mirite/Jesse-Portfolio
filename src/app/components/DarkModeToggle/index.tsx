"use client";
import React, { useEffect, useState } from "react";
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
    if (mode) {
      localStorage.theme = mode;
    } else {
      localStorage.removeItem("theme");
    }
    updateTheme();
    setModalActive(false);
    setCurrentMode(e.icon);
  };

  useEffect(() => {
    updateTheme();
  }, []);

  const [modalActive, setModalActive] = useState(false);
  const [currentMode, setCurrentMode] = useState<OptionIcon>(faDisplay);
  return (
    <div className="relative w-12">
      {modalActive ? (
        <ul className="absolute">
          {options.map((option, index) => (
            <Option
              key={index}
              {...option}
              onClick={() => handleChange(option)}
            />
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

function updateTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default Index;
