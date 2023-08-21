"use client";
import React from "react";
import NavLink from "@/app/components/Header/NavLink";
import DarkModeToggle from "../../ThemeSelect";
import Button from "@/app/components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [showing, setShowing] = React.useState(false);
  return (
    <div className="grow flex justify-end">
      <Button
        className={"md:hidden " + (showing ? "opacity-0" : "")}
        onPress={() => setShowing(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <div
        className={
          "bg-white dark:bg-black items-center md:items-baseline flex-col shadow md:shadow-none md:flex md:flex-row md:static fixed left-4 right-4 " +
          (showing ? "block" : "hidden")
        }
      >
        <div className="md:hidden">
          <Button className="float-right" onPress={() => setShowing(false)}>
            <FontAwesomeIcon icon={faClose} />
          </Button>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="flex md:flex-row flex-col">
            <NavLink path="/projects" label="Projects" />
            <NavLink path="/skills" label="Skills" />
            <NavLink path="/about" label="About" />
            <NavLink path="/contact" label="Contact" />
          </ul>
        </nav>
        <div className="flex items-baseline">
          <span className="block md:hidden mr-2">Theme:</span>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Index;
