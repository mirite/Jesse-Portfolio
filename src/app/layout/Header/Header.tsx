import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "../../svg/logo.svg";

const Header = () => {
  return (
    <header className="mb-1">
      <div className="pt-3 pb-3 mt-0 mb-0 ml-auto mr-auto flex items-center">
        <div className="max-w-[50%] md:max-w-[33%]" aria-label="Site Title">
          <Link href="/"><Image src={logo} alt={"Jesse Conner"}/></Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
