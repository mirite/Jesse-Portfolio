"use client";

import type { HTMLAttributes, ReactElement } from "react";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
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
	const hiddenState = {
		left: screenWidth >= LARGE_SCREEN_WIDTH ? 0 : "100%",
	};
	return (
		<>
			<AnimatePresence>
				{shouldShow ? (
					<motion.div
						animate={{ left: "0" }}
						className={twMerge(
							"fixed inset-0 flex h-dvh w-dvw flex-col items-center justify-center bg-white lg:static lg:size-auto lg:flex-row lg:justify-end lg:bg-transparent dark:bg-blue-green lg:dark:bg-transparent",
							className,
						)}
						exit={hiddenState}
						initial={hiddenState}
						key={"menu"}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						{children}
					</motion.div>
				) : null}
			</AnimatePresence>
			{!forceOpen && (
				<Button
					className={"relative ml-auto lg:hidden"}
					onClick={() => setOpen(!open)}
					title={open ? "Close Menu" : "Open Menu"}
					type={"button"}
				>
					<FontAwesomeIcon
						className={"size-8"}
						icon={open ? faClose : faBars}
					/>
				</Button>
			)}
		</>
	);
};

export default MenuToggle;
