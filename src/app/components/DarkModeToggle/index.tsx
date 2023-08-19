"use client";
import React, { useEffect, useRef, useState } from "react";
import Option from "@/app/components/DarkModeToggle/Option";
import { faSun, faMoon, faDisplay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/app/components/general/Button";

const options = [
  { label: "Light", icon: faSun, className: "light" },
  { label: "Dark", icon: faMoon, className: "dark" },
  { label: "System", icon: faDisplay, className: "", defaultOption: true },
] as const;

export type OptionDefinition = (typeof options)[number];
type OptionIcon = OptionDefinition["icon"];
const Index = () => {
  const modalRef = useRef<HTMLUListElement>(null); // Ref to store the modal

  const handleChange = (e: OptionDefinition, event: React.MouseEvent) => {
    event.stopPropagation();
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
    const handleBodyClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalActive(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => document.body.removeEventListener("click", handleBodyClick); // Cleanup listener on unmount
  }, []);

  const [modalActive, setModalActive] = useState(false);
  const [currentMode, setCurrentMode] = useState<OptionIcon>(faDisplay);
  return (
    <div className="relative w-12">
      <Button
        className={modalActive ? "opacity-0" : ""}
        onClick={() => setModalActive(true)}
        title="Colour Theme"
      >
        <FontAwesomeIcon icon={currentMode} />
      </Button>
      {modalActive && (
        <ul className="absolute top-0" ref={modalRef}>
          {options.map((option) => (
            <Option
              key={option.label}
              {...option}
              onClick={(e) => handleChange(option, e)}
            />
          ))}
        </ul>
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
