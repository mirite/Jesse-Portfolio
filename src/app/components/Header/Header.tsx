import Link from "next/link";
import React from "react";
import NavLink from "@/app/components/Header/NavLink";
import DarkModeToggle from "@/app/components/DarkModeToggle";

const Header = () => {
  return (
    <header className="mb-1">
      <div className="pt-3 pb-3 mt-0 mb-0 ml-auto mr-auto flex items-center">
        <div className="header-home" aria-label="Site Title">
          <Link href="/"> Jesse Conner </Link>
        </div>
        <nav className="flex justify-end grow" aria-label="Main Navigation">
          <ul className="flex">
            <NavLink path="/projects" label="Projects" />
            <NavLink path="/skills" label="Skills" />
            <NavLink path="/about" label="About" />
            <NavLink path="/contact" label="Contact" />
          </ul>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
