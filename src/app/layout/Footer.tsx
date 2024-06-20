import React, { type ReactElement } from "react";

import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
import Nav from "@/app/layout/Header/Nav";
import Logo from "@/app/layout/Header/Logo";
import Socials from "@/app/contact/Socials";

const Footer = (): ReactElement => {
	return (
		<MaxWidthContainer className={"mt-2"}>
			<footer className="flex flex-col items-center justify-center gap-4 p-4 text-center xs:flex-row xs:items-start xs:gap-12">
				<div className={"flex flex-col items-center justify-end gap-4"}>
					<Logo className={"w-32 xs:w-64"} />
					<Socials iconsOnly={true} className={"flex-row gap-4"} />
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
			</footer>
		</MaxWidthContainer>
	);
};

export default Footer;
