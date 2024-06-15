import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

export const options = [
	{ label: "Light", icon: faLightbulb, className: "light" },
	{ label: "Dark", icon: faMoon, className: "dark" },
	{ label: "System", icon: faDisplay, className: "", defaultOption: true },
] as const;

export type OptionDefinition = (typeof options)[number];
export type OptionIcon = OptionDefinition["icon"];
export function updateTheme(): void {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}

export function setTheme(mode: OptionDefinition["className"]): void {
	if (mode) {
		localStorage.theme = mode;
	} else {
		localStorage.removeItem("theme");
	}
	updateTheme();
}
