"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'
const NavLink = ({path, label}:{path: string, label: string}) => {
    const currentURL = usePathname()
    const current = currentURL === path;
    const additionalClasses = current ? "underline" : "";
    return (
        <li className={"mr-2 " + additionalClasses}>
            <Link href={path}>{label}</Link>
        </li>
    );
};

export default NavLink;
