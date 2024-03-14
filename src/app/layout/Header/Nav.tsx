import React from "react";
import NavLink from "./NavLink";
import MenuToggle from "@/app/layout/Header/MenuToggle";

const Nav = () => {
	return (
		<MenuToggle>
			<nav
				aria-label="Main Navigation"
				className={"h-full lg:h-auto flex items-center justify-center"}
			>
				<menu
					className="flex lg:flex-row flex-col gap-4 items-center"
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
