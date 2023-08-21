"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/app/components/general/Button";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import {
  OptionDefinition,
  OptionIcon,
  setTheme,
  updateTheme,
} from "@/app/helpers/theme";
import ThemeSelectModal from "@/app/components/ThemeSelect/ThemeSelectModal";

const Index = () => {
  const handleChange = (e: OptionDefinition) => {
    setTheme(e.className);
    setModalActive(false);
    setCurrentMode(e.icon);
  };

  useEffect(() => {
    updateTheme();
  }, []);

  const [modalActive, setModalActive] = useState(false);
  const [currentMode, setCurrentMode] = useState<OptionIcon>(faDisplay);
  return (
    <div className="relative">
      <Button
        className={modalActive ? "opacity-0" : ""}
        onPress={() => setModalActive(true)}
        title="Colour Theme"
      >
        <FontAwesomeIcon icon={currentMode} />
      </Button>
      {modalActive && (
        <ThemeSelectModal
          onClose={() => setModalActive(false)}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Index;
