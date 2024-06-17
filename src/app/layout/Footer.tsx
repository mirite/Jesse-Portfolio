import React, { type ReactElement } from "react";

import { TextWrapper } from "@/app/components";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
import Nav from "@/app/layout/Header/Nav";
import Logo from "@/app/layout/Header/Logo";

const Footer = (): ReactElement => {
	return (
		<MaxWidthContainer className={"mt-2"}>
			<footer className="flex flex-col items-center justify-center gap-8 p-4 text-center xs:flex-row">
				<div className={"flex flex-col items-center gap-2"}>
					<Logo className={"w-32 xs:w-32"} />
					Copyright ©{new Date().getFullYear()} Jesse Conner
				</div>
				<Nav
					menuToggleProps={{
						forceOpen: true,
						className: "static h-auto w-auto p-0 grow-0",
					}}
					menuProps={{
						className: "text-lg columns-2 block text-center xs:text-left",
					}}
				/>
			</footer>
		</MaxWidthContainer>
	);
};

export default Footer;
