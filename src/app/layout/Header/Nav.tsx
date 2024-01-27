import React from "react";
import NavLink from "./NavLink";
import DarkModeToggle from "./ThemeSelect";
import { Button } from "@/app/components/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

const Nav = () => {
	return (
		<div className="grow flex justify-end">
			<Button className={"md:hidden"} id={"menu-toggle"}>
				<FontAwesomeIcon icon={faBars} />
			</Button>
			<div
				id={"menu"}
				className={
					"bg-white dark:bg-black items-center md:items-baseline flex-col shadow md:shadow-none md:flex md:flex-row md:static fixed left-4 right-4 hidden"
				}
			>
				<div className="md:hidden">
					<Button id={"closeToggle"} className="float-right">
						<FontAwesomeIcon icon={faClose} />
					</Button>
				</div>
				<nav aria-label="Main Navigation">
					<ul className="flex md:flex-row flex-col" id={"nav-links"}>
						<NavLink path="/projects" label="Projects" />
						<NavLink path="/skills" label="Skills" />
						<NavLink path="/about" label="About" />
						<NavLink path="/contact" label="Contact" />
					</ul>
				</nav>
				<div className="flex items-baseline">
					<span className="block md:hidden mr-2">Theme:</span>
					<DarkModeToggle />
				</div>
			</div>
			<Script id={"menu-toggle"}>
				{`
            const toggle = document.getElementById("menu-toggle");
            const menu = document.getElementById("menu");
            const close = document.getElementById("closeToggle");
            toggle.addEventListener("click", () => {
                menu.classList.remove("hidden");
                menu.classList.add("block");
                toggle.classList.add("opacity-0");
                });
            close.addEventListener("click", () => {
                menu.classList.remove("block");
                menu.classList.add("hidden");
                toggle.classList.remove("opacity-0");
                });
                const navLinks = document.querySelectorAll("#nav-links a");
                const currentPath = window.location.pathname;
                navLinks.forEach((link) => {
       if ("/" + link.href.split("/").pop() === currentPath) {
            link.classList.remove("no-underline");
            }
                });
            `}
			</Script>
		</div>
	);
};

export default Nav;
