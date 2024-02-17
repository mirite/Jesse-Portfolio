import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "../../svg/logo.svg";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
const Header = () => {
	return (
		<header className="pt-3 pb-3 mt-0 mb-0 flex items-center">
			<MaxWidthContainer className={"flex justify-between items-center"}>
				<div className="header-home max-w-md" aria-label="Site Title">
					<Link href="/">
						<Image src={logo} alt={"Jesse Conner"} />
					</Link>
				</div>
				<Nav />
			</MaxWidthContainer>
		</header>
	);
};

export default Header;
