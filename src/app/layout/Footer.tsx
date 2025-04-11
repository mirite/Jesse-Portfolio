import React, { type ReactElement } from "react";

import Socials from "@/app/contact/Socials";
import Logo from "@/app/layout/Header/Logo";
import Nav from "@/app/layout/Header/Nav";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

const Footer = (): ReactElement => {
	return (
		<MaxWidthContainer className={"mt-2 w-full p-4"} Element={"footer"}>
			<div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-start sm:gap-12">
				<div
					className={
						"flex flex-col items-center justify-end gap-4 sm:items-start"
					}
				>
					<Logo className={"w-32 xs:w-64"} />
					<Socials iconsOnly={true} className={"flex-row gap-4"} />
				</div>
				<Nav
					menuToggleProps={{
						forceOpen: true,
						className: "static h-auto w-auto p-0 grow-0",
					}}
					menuProps={{
						className: "text-lg columns-2 block text-center sm:text-left",
					}}
				/>
			</div>
			<div className={"text-center"}>
				Copyright ©{new Date().getFullYear()} Jesse Conner
			</div>
		</MaxWidthContainer>
	);
};

export default Footer;
