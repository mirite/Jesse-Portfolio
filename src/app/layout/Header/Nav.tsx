import React, { type ReactElement } from "react";

import NavLink from "./NavLink";

import MenuToggle from "@/app/layout/Header/MenuToggle";

const Nav = (): ReactElement => {
	return (
		<MenuToggle>
			<nav
				aria-label="Main Navigation"
				className={"flex h-full items-center justify-center lg:h-auto"}
			>
				<menu
					className="flex flex-col items-center gap-4 lg:flex-row"
					id={"nav-links"}
				>
					<NavLink path="/projects" label="Projects" />
					<NavLink path="/blog" label="Blog" />
					<NavLink path="/skills" label="Skills" />
					<NavLink path="/about" label="About" />
					<NavLink path="/contact" label="Contact" />
				</menu>
			</nav>
		</MenuToggle>
	);
};
//rgb(26 46 37 / var(--tw-bg-opacity))

export default Nav;
