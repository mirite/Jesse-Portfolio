import React, { type ReactElement } from "react";

import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
import Nav from "@/app/layout/Header/Nav";
import Logo from "@/app/layout/Header/Logo";
import Socials from "@/app/contact/Socials";

const Footer = (): ReactElement => {
	return (
		<MaxWidthContainer className={"mt-2"}>
			<footer className="flex flex-col items-center justify-center gap-12 p-4 text-center xs:flex-row xs:items-start">
				<div className={"flex flex-col items-center justify-end gap-2"}>
					<Logo className={"w-32 xs:w-32"} />
					<div>Copyright ©{new Date().getFullYear()} Jesse Conner</div>
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
				<Socials />
			</footer>
		</MaxWidthContainer>
	);
};

export default Footer;
