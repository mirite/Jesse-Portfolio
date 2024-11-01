import "./globals.css";
import type { ReactElement, PropsWithChildren } from "react";
import React from "react";

import { Header, Footer } from "@/app/layout/index";
import Theme from "@/app/layout/Theme";

export const metadata = {
	title: "Jesse Conner",
	description:
		"Welcome to my site! I am a software developer (primarily web) from Toronto, Ontario. This site is a place for me to share my skills, projects, and tell a little about myself.",
};

type Props = PropsWithChildren;
/**
 * The root layout.
 *
 * @param props The component props.
 * @returns The component
 */
export default function RootLayout(props: Props): ReactElement {
	const { children } = props;
	return (
		<html lang="en">
			<body
				className={
					"min-h-dvh overflow-x-hidden scroll-smooth text-base subpixel-antialiased"
				}
			>
				<Theme>
					<Header />
					{children}
					<Footer />
				</Theme>
			</body>
		</html>
	);
}
