import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "../../svg/logo.svg";
const Header = () => {
	return (
		<header className="pt-3 pb-3 mt-0 mb-0 ml-auto mr-auto flex items-center">
			<div className="header-home max-w-[50%]" aria-label="Site Title">
				<Link href="/"><Image src={logo} alt={"Jesse Conner"}/></Link>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
