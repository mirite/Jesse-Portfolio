"use client";
import React, {
	type HTMLAttributes,
	type ReactElement,
	createContext,
	useState,
	useEffect,
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
export default function Theme(props: Props): ReactElement {
	const [theme, setTheme, bodyClass] = useTheme();
	const [client, setClient] = useState(false);
	useEffect(() => {
		setClient(true);
	}, []);
	if (!client) {
		return <></>;
	}
	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<div className={bodyClass}>
				<div className="relative flex min-h-dvh max-w-full flex-col justify-center bg-white text-blue-green-900 dark:bg-blue-green-900 dark:text-white">
					{props.children}
				</div>
			</div>
		</ThemeContext.Provider>
	);
}
