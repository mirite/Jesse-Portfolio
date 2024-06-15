import Image from "next/image";
import Link from "next/link";
import React from "react";

import icon from "../../icon.svg";
import logo from "../../svg/logo.svg";

import Nav from "./Nav";

import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

const Header = () => {
	return (
		<header className="my-0 flex items-center py-2">
			<MaxWidthContainer className={"flex items-center justify-between"}>
				<div className="p-9 xs:p-4" aria-label="Site Title">
					<Link href="/" className={""}>
						<Image
							src={logo}
							alt={"Jesse Conner"}
							className={"hidden max-w-sm xs:block md:max-w-md"}
						/>
						<Image
							src={icon}
							alt={"Jesse Conner"}
							className={" block w-8 xs:hidden"}
						/>
					</Link>
				</div>
				<Nav />
			</MaxWidthContainer>
		</header>
	);
};

export default Header;
