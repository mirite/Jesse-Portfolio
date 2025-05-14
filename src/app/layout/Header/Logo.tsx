import type { ComponentProps, ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

import icon from "@/app/icon.svg";
import logo from "@/app/svg/logo.svg";

const Logo = (props: Partial<ComponentProps<typeof Link>>): ReactElement => {
	const { className, href, ...rest } = props;
	return (
		<Link
			className={twMerge("block w-8 max-w-full xs:w-64", className)}
			href={href || "/"}
			title={"Jesse Conner"}
			{...rest}
		>
			<Image
				alt={"Jesse Conner"}
				className={"m-0 hidden max-w-full xs:block"}
				src={logo}
			/>
			<Image
				alt={"Jesse Conner"}
				className={"m-0 block max-w-full xs:hidden"}
				src={icon}
			/>
		</Link>
	);
};

export default Logo;
