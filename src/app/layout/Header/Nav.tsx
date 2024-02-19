import React from "react";
import NavLink from "./NavLink";
import MenuToggle from "@/app/layout/Header/MenuToggle";

const Nav = () => {
	return (
		<div className="grow flex justify-end">
			<MenuToggle>
				<div
					className={
						"justify-end md:items-baseline items-center flex-col shadow md:shadow-none md:flex md:flex-row md:static fixed inset-0 bg-white dark:bg-blue-green-900 md:bg-transparent w-full"
					}
				>
					<nav
						aria-label="Main Navigation"
						className={"h-full md:h-auto flex items-center justify-center"}
					>
						<ul
							className="flex md:flex-row flex-col gap-4 items-center"
							id={"nav-links"}
						>
							<NavLink path="/projects" label="Projects" />
							<NavLink path="/blog" label="Blog" />
							<NavLink path="/skills" label="Skills" />
							<NavLink path="/about" label="About" />
							<NavLink path="/contact" label="Contact" />
						</ul>
					</nav>
				</div>
			</MenuToggle>
		</div>
	);
};
//rgb(26 46 37 / var(--tw-bg-opacity))

export default Nav;
