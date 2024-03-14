import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "../../svg/logo.svg";
import icon from "../../icon.svg";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
const Header = () => {
	return (
		<header className="py-2 mt-0 mb-0 flex items-center">
			<MaxWidthContainer className={"flex justify-between items-center"}>
				<div className="xs:p-4 p-9" aria-label="Site Title">
					<Link href="/" className={""}>
						<Image
							src={logo}
							alt={"Jesse Conner"}
							className={"hidden xs:block max-w-sm md:max-w-md"}
						/>
						<Image
							src={icon}
							alt={"Jesse Conner"}
							className={" block xs:hidden w-8"}
						/>
					</Link>
				</div>
				<Nav />
			</MaxWidthContainer>
		</header>
	);
};

export default Header;
