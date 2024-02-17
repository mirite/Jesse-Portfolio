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
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [screenWidth]);

	useEffect(() => {
		setOpen(false);
	}, [dynamicRoute]);
	return (
		<>
			<Button
				className={"md:hidden fixed top-12 right-4 z-50"}
				onClick={() => setOpen(!open)}
			>
				<FontAwesomeIcon
					className={"h-6 w-6 "}
					icon={open ? faClose : faBars}
				/>
			</Button>
			{(screenWidth >= 768 || open) && props.children}
		</>
	);
};

export default MenuToggle;
