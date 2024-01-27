import Link from "next/link";
import React from "react";
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="mb-1">
			<div className="pt-3 pb-3 mt-0 mb-0 ml-auto mr-auto flex items-baseline">
				<div className="header-home" aria-label="Site Title">
					<Link href="/"> Jesse Conner </Link>
				</div>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
