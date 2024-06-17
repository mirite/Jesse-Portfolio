"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import type { HTMLAttributes, ReactElement } from "react";
import React, { useEffect, useState } from "react";

import { Button } from "@/app/components";
import { twMerge } from "tailwind-merge";

const LARGE_SCREEN_WIDTH = 1024;

export type MenuToggleProps = HTMLAttributes<HTMLDivElement> & {
	forceOpen?: boolean;
};

const MenuToggle = (props: MenuToggleProps): ReactElement => {
	const { children, className, forceOpen, ...rest } = props;
	const [open, setOpen] = useState(forceOpen || false);
	const [screenWidth, setScreenWidth] = useState(0);
	const dynamicRoute = usePathname();
	useEffect(() => {
		setScreenWidth(window.innerWidth);
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [screenWidth]);

	useEffect(() => {
		setOpen(false);
	}, [dynamicRoute]);

	const shouldShow = forceOpen || screenWidth >= LARGE_SCREEN_WIDTH || open;
	const shouldShowMobile =
		forceOpen || (screenWidth < LARGE_SCREEN_WIDTH && open);
	return (
		<div
			className={twMerge(
				"flex grow flex-col justify-end lg:flex-row",
				shouldShowMobile &&
					"fixed inset-0 h-dvh w-dvw items-end bg-white pr-4 pt-10 lg:bg-transparent dark:bg-blue-green-900",
				className,
			)}
			{...rest}
		>
			{!forceOpen && (
				<Button
					className={"ml-auto lg:hidden"}
					onClick={() => setOpen(!open)}
					title={open ? "Close Menu" : "Open Menu"}
					type={"button"}
				>
					<FontAwesomeIcon
						className={"size-6"}
						icon={open ? faClose : faBars}
					/>
				</Button>
			)}
			{shouldShow && (
				<div
					className={
						"w-full grow flex-col items-center justify-end lg:flex lg:flex-row lg:items-baseline"
					}
				>
					{props.children}
				</div>
			)}
		</div>
	);
};

export default MenuToggle;
