"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import type { HTMLAttributes, ReactElement } from "react";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/app/components";

const LARGE_SCREEN_WIDTH = 1024;

export type MenuToggleProps = HTMLAttributes<HTMLDivElement> & {
	forceOpen?: boolean;
};

const MenuToggle = (props: MenuToggleProps): ReactElement => {
	const { children, className, forceOpen } = props;
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
		<div className={"relative"}>
			<AnimatePresence>
				{shouldShow && (
					<motion.div
						key={"menu"}
						className={twMerge(
							"flex flex-col justify-end lg:flex-row",
							shouldShowMobile &&
								"fixed inset-0 h-dvh max-h-dvh w-dvw items-center justify-center bg-white pr-4 pt-10 dark:bg-blue-green-900 lg:bg-transparent",
							className,
						)}
						initial={{
							left: screenWidth >= LARGE_SCREEN_WIDTH ? 0 : "100%",
							display: "none",
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						animate={{ left: "0", display: "flex" }}
						exit={{
							left: screenWidth >= LARGE_SCREEN_WIDTH ? 0 : "100%",
							display: "none",
						}}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
			{!forceOpen && (
				<Button
					className={"relative ml-auto lg:hidden"}
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
		</div>
	);
};

export default MenuToggle;
