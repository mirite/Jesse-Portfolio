"use client";

import React, {
	createContext,
	type HTMLAttributes,
	type ReactElement,
	useEffect,
	useMemo,
	useState,
} from "react";

import type { OptionDefinition, ThemeOption } from "@/lib";

import { useTheme } from "@/lib";

type Props = HTMLAttributes<HTMLDivElement>;

export const ThemeContext = createContext<null | {
	setTheme: (theme: ThemeOption) => void;
	theme: OptionDefinition;
}>(null);
/**
 * Sets the theme of the site.
 *
 * @param props The props for the component.
 * @returns The component.
 */
export default function Theme(props: Props): null | ReactElement {
	const [theme, setTheme, bodyClass] = useTheme();
	const [client, setClient] = useState(false);
	useEffect(() => {
		setClient(true);
	}, []);
	const contextValue = useMemo(
		() => ({
			setTheme,
			theme,
		}),
		[theme, setTheme],
	);
	if (!client) {
		return null;
	}
	return (
		<ThemeContext.Provider value={contextValue}>
			<div className={bodyClass}>
				<div className="relative flex min-h-dvh max-w-full flex-col justify-center bg-white text-blue-green transition-all dark:bg-blue-green dark:text-white">
					{props.children}
				</div>
			</div>
		</ThemeContext.Provider>
	);
}
