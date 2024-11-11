import React, { type ReactElement } from "react";

import Nav from "./Nav";

import Logo from "@/app/layout/Header/Logo";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

const Header = (): ReactElement => {
	return (
		<header className="sticky inset-x-0 top-0 z-20 mb-8 flex items-center py-1 shadow-md backdrop-blur-2xl">
			<MaxWidthContainer className={"flex w-full items-center justify-between"}>
				<div className="p-9 xs:p-4" aria-label="Site Title">
					<Logo />
				</div>
				<Nav />
			</MaxWidthContainer>
		</header>
	);
};

export default Header;
