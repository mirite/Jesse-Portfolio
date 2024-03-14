"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { Button } from "@/app/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

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

	const shouldShow = screenWidth >= 1024 || open;
	return (
		<div
			className={
				"grow flex justify-end lg:flex-row flex-col " +
				(open && screenWidth < 1024
					? "fixed inset-0 pt-10 pr-4 bg-white dark:bg-blue-green-900 lg:bg-transparent items-end"
					: "")
			}
		>
			<Button
				className={"lg:hidden ml-auto"}
				onClick={() => setOpen(!open)}
				title={open ? "Close Menu" : "Open Menu"}
				type={"button"}
			>
				<FontAwesomeIcon className={"h-6 w-6"} icon={open ? faClose : faBars} />
			</Button>
			{shouldShow && (
				<div
					className={
						"justify-end lg:items-baseline items-center flex-col shadow lg:shadow-none lg:flex lg:flex-row w-full grow"
					}
				>
					{props.children}
				</div>
			)}
		</div>
	);
};

export default MenuToggle;
