"use client";

import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { useState, useSyncExternalStore } from "react";

const darkModeClass = "dark";
export const options = {
	Dark: { icon: faMoon, slug: darkModeClass },
	Light: { icon: faLightbulb, slug: "light" },
	System: { icon: faDisplay, slug: "system" },
} as const;

export type OptionDefinition = (typeof options)[keyof typeof options];

export type ThemeOption = keyof typeof options;

/**
 * Get the media matcher for the prefers dark mode query.
 *
 * @returns The media matcher for the prefers dark mode query.
 */
function getMediaMatcher() {
	return window.matchMedia(prefersDarkQuery);
}

/**
 * Get the current theme from local storage.
 *
 * @returns The current theme from local storage.
 */
function getThemeFromLocalStorage(): OptionDefinition {
	if (typeof window === "undefined") {
		return options.System;
	}
	if (!localStorage.getItem("theme")) {
		return options.System;
	}
	if (localStorage.getItem("theme") === darkModeClass) {
		return options.Dark;
	} else {
		return options.Light;
	}
}

const prefersDarkQuery = "(prefers-color-scheme: dark)";

/**
 * Get the current theme from local storage, and provide a function to set it.
 *
 * @returns The current theme and a function to set it.
 */
export function useTheme(): [
	activeTheme: OptionDefinition,
	themeSetter: (theme: ThemeOption) => void,
	bodyClass: string,
] {
	const [theme, setThemeState] = useState<OptionDefinition>(
		getThemeFromLocalStorage(),
	);
	const handleSetTheme = (newTheme: ThemeOption) => {
		const newOption = options[newTheme];
		if (newOption !== options.System) {
			localStorage.setItem("theme", newOption.slug);
		} else {
			localStorage.removeItem("theme");
		}

		setThemeState(options[newTheme]);
	};
	const bodyClass = useSyncExternalStore(
		subscribe,
		() => {
			if (theme.slug === darkModeClass) {
				return darkModeClass;
			}
			if (theme.slug === "system" && getMediaMatcher().matches) {
				return darkModeClass;
			}
			return "";
		},
		() => "",
	);

	return [theme, handleSetTheme, bodyClass];
}

/**
 * Subscribe to changes in the theme.
 *
 * @param callback The callback to call when the theme changes.
 * @returns A function to unsubscribe from the theme changes.
 */
function subscribe(callback: () => void) {
	const mql = getMediaMatcher();
	window.addEventListener("storage", callback);
	mql.addEventListener("change", callback);
	return () => {
		window.removeEventListener("storage", callback);
		mql.removeEventListener("change", callback);
	};
}
