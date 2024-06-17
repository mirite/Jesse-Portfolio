import type { ComponentProps, ReactElement } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/svg/logo.svg";
import icon from "@/app/icon.svg";
import { twMerge } from "tailwind-merge";

const Logo = (props: Partial<ComponentProps<typeof Link>>): ReactElement => {
	const { className, href, ...rest } = props;
	return (
		<Link
			href={href || "/"}
			className={twMerge("block w-8 max-w-full xs:w-64", className)}
			title={"Jesse Conner"}
			{...rest}
		>
			<Image
				src={logo}
				alt={"Jesse Conner"}
				className={"m-0 hidden max-w-full xs:block"}
			/>
			<Image
				src={icon}
				alt={"Jesse Conner"}
				className={"m-0 block max-w-full xs:hidden"}
			/>
		</Link>
	);
};

export default Logo;
