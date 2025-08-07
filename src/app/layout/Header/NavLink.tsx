"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const NavLink = ({
	label,
	path,
}: {
	label: string;
	path: string;
}): ReactElement => {
	const currentPath = usePathname();
	return (
		<li className="prose-blue-green dark:prose-invert">
			<Link
				className={twMerge(
					"leading-none no-underline transition hover:underline",
					currentPath === path ? "underline" : "",
				)}
				href={path}
			>
				{label}
			</Link>
		</li>
	);
};

export default NavLink;
