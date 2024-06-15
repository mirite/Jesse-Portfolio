import type { ReactElement } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/svg/logo.svg";
import icon from "@/app/icon.svg";

const Logo = (): ReactElement => {
	return (
		<Link href="/" className={""} title={"Jesse Conner"}>
			<Image
				src={logo}
				alt={"Jesse Conner"}
				className={"hidden max-w-sm xs:block md:max-w-md"}
			/>
			<Image
				src={icon}
				alt={"Jesse Conner"}
				className={"block w-8 xs:hidden"}
			/>
		</Link>
	);
};

export default Logo;
