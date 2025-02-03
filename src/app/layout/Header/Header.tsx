import React, { type ReactElement } from "react";

import Logo from "@/app/layout/Header/Logo";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

import Nav from "./Nav";

const Header = (): ReactElement => {
	return (
		<header className="sticky inset-x-0 top-0 z-20 mb-8 flex items-center py-1 shadow-md backdrop-blur-2xl">
			<MaxWidthContainer className={"flex w-full items-center justify-between"}>
				<div className="xs:p-4 p-9" aria-label="Site Title">
					<Logo />
				</div>
				<Nav />
			</MaxWidthContainer>
		</header>
	);
};

export default Header;
