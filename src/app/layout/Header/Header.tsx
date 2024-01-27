import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

const Header = () => {
	return (
		<MaxWidthContainer className="mb-1">
			<header className="pt-3 pb-3 mt-0 mb-0 ml-auto mr-auto flex items-baseline">
				<div className="header-home" aria-label="Site Title">
					<Link href="/"> Jesse Conner </Link>
				</div>
				<Nav />
			</header>
		</MaxWidthContainer>
	);
};

export default Header;
