"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { Button } from "@/app/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const LARGE_SCREEN_WIDTH = 1024;

const MenuToggle = (props: PropsWithChildren) => {
	const [open, setOpen] = React.useState(false);
	const [screenWidth, setScreenWidth] = React.useState(0);
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

	const shouldShow = screenWidth >= LARGE_SCREEN_WIDTH || open;
	const shouldShowMobile = screenWidth < LARGE_SCREEN_WIDTH && open;
	return (
		<div
			className={
				"flex grow flex-col justify-end lg:flex-row " +
				(shouldShowMobile
					? "fixed inset-0 items-end bg-white pr-4 pt-10 lg:bg-transparent dark:bg-blue-green-900"
					: "")
			}
		>
			<Button
				className={"ml-auto lg:hidden"}
				onClick={() => setOpen(!open)}
				title={open ? "Close Menu" : "Open Menu"}
				type={"button"}
			>
				<FontAwesomeIcon className={"h-6 w-6"} icon={open ? faClose : faBars} />
			</Button>
			{shouldShow && (
				<div
					className={
						"w-full grow flex-col items-center justify-end shadow lg:flex lg:flex-row lg:items-baseline lg:shadow-none"
					}
				>
					{props.children}
				</div>
			)}
		</div>
	);
};

export default MenuToggle;
