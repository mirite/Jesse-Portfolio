"use client";
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { useState, useSyncExternalStore } from "react";

const darkModeClass = "dark";
export const options = {
	Light: { slug: "light", icon: faLightbulb },
	Dark: { slug: darkModeClass, icon: faMoon },
	System: { slug: "system", icon: faDisplay },
} as const;

export type ThemeOption = keyof typeof options;

export type OptionDefinition = (typeof options)[keyof typeof options];
export type OptionIcon = OptionDefinition["icon"];

/** Get the current theme from local storage. */
function getThemeFromLocalStorage(): OptionDefinition {
	if (typeof window === "undefined") {
		return options.System;
	}
	if (!("theme" in localStorage)) {
		return options.System;
	}
	if (localStorage.theme === darkModeClass) {
		return options.Dark;
	} else {
		return options.Light;
	}
}

function getMediaMatcher() {
	return window.matchMedia(prefersDarkQuery);
}

const prefersDarkQuery = "(prefers-color-scheme: dark)";

/** @param callback */
function subscribe(callback: () => void) {
	const mql = getMediaMatcher();
	window.addEventListener("storage", callback);
	mql.addEventListener("change", callback);
	return () => {
		window.removeEventListener("storage", callback);
		mql.removeEventListener("change", callback);
	};
}

/** Get the current theme from local storage, and provide a function to set it. */
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
			localStorage.theme = newOption.slug;
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
