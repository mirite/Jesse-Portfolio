import React, { type ReactElement } from "react";

import Nav from "./Nav";

import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
import Logo from "@/app/layout/Header/Logo";

const Header = (): ReactElement => {
	return (
		<header className="my-0 flex items-center py-2">
			<MaxWidthContainer className={"flex items-center justify-between"}>
				<div className="p-9 xs:p-4" aria-label="Site Title">
					<Logo />
				</div>
				<Nav />
			</MaxWidthContainer>
		</header>
	);
};

export default Header;
