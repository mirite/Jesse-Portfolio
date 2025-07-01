import React, { type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import type { MenuToggleProps } from "@/app/layout/Header/MenuToggle";

import MenuToggle from "@/app/layout/Header/MenuToggle";
import ThemeToggle from "@/app/layout/Header/ThemeToggle";

import NavLink from "./NavLink";

type Props = {
	menuProps?: Omit<React.HTMLProps<HTMLMenuElement>, "children">;
	menuToggleProps?: Omit<MenuToggleProps, "children">;
};
const Nav = (props: Props): ReactElement => {
	const { menuProps, menuToggleProps } = props;
	const { className, ...rest } = menuProps || {};
	return (
		<MenuToggle {...menuToggleProps}>
			<nav
				aria-label="Main Navigation"
				className={"flex items-center justify-center"}
			>
				<menu
					className={twMerge(
						"flex flex-col items-center gap-4 text-2xl lg:flex-row",
						className,
					)}
					{...rest}
				>
					<NavLink label="Apps" path="/apps" />
					<NavLink label="Blog" path="/blog" />
					<NavLink label="Skills" path="/skills" />
					<NavLink label="About" path="/about" />
					<NavLink label="Contact" path="/contact" />
					{!menuToggleProps?.forceOpen && <ThemeToggle />}
				</menu>
			</nav>
		</MenuToggle>
	);
};
//rgb(26 46 37 / var(--tw-bg-opacity))

export default Nav;
