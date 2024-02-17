"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
const NavLink = ({ path, label }: { path: string; label: string }) => {
	const currentPath = usePathname();
	return (
		<li className="prose-blue-green dark:prose-invert">
			<Link
				href={path}
				className={twMerge(
					"no-underline hover:underline transition text-2xl",
					currentPath === path ? "underline" : "",
				)}
			>
				{label}
			</Link>
		</li>
	);
};

export default NavLink;
