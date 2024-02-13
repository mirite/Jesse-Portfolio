import React from "react";
import Link from "next/link";
const NavLink = ({ path, label }: { path: string; label: string }) => {
	return (
		<li className="mr-2">
			<Link href={path} className={"no-underline hover:underline transition"}>
				{label}
			</Link>
		</li>
	);
};

export default NavLink;
