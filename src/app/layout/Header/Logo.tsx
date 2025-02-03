import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactElement } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

import icon from "@/app/icon.svg";
import logo from "@/app/svg/logo.svg";

const Logo = (props: Partial<ComponentProps<typeof Link>>): ReactElement => {
	const { className, href, ...rest } = props;
	return (
		<Link
			href={href || "/"}
			className={twMerge("xs:w-64 block w-8 max-w-full", className)}
			title={"Jesse Conner"}
			{...rest}
		>
			<Image
				src={logo}
				alt={"Jesse Conner"}
				className={"xs:block m-0 hidden max-w-full"}
			/>
			<Image
				src={icon}
				alt={"Jesse Conner"}
				className={"xs:hidden m-0 block max-w-full"}
			/>
		</Link>
	);
};

export default Logo;
