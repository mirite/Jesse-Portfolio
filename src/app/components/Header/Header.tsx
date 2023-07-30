import Link from "next/link";
import React from "react";


const Header = () => {
  return (
    <header className="mb-1">
      <div className="pt-3 pb-3 mt-0 mb-0 ml-auto mr-auto flex">
        <div className="header-home" aria-label="Site Title">
          <Link href="/"> Jesse Conner </Link>
        </div>
        <nav className="flex justify-end grow" aria-label="Main Navigation">
          <ul className="flex">
            <li className="mr-2">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mr-2">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="mr-2">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="mr-2">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
