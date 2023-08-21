"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ path, label }: { path: string; label: string }) => {
  const currentURL = usePathname();
  const current = currentURL === path;
  return (
    <li className="mr-2">
      <Link className={current ? "underline" : "no-underline"} href={path}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;