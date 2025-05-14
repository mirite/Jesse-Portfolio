"use client";

import React, { type ReactElement, useContext } from "react";

import { ThemeContext } from "@/app/layout/Theme";

/**
 * A component that toggles the theme of the site.
 *
 * @returns The component.
 */
export default function ThemeToggle(): ReactElement {
	const theme = useContext(ThemeContext);
	return (
		<li>
			<button
				className="text-2xl"
				onClick={() => {
					if (theme) {
						theme.setTheme(theme.theme.slug === "light" ? "Dark" : "Light");
					}
				}}
				type={"button"}
			>
				{theme?.theme.slug === "light" ? "🌞" : "🌜"}
			</button>
		</li>
	);
}
