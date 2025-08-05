import "./globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren, ReactElement } from "react";

import React from "react";

import { Footer, Header } from "@/app/layout/index";
import Theme from "@/app/layout/Theme";

export const metadata: Metadata = {
	description:
		"Welcome to my site! I am a software developer (primarily web) from Toronto, Ontario. This site is a place for me to share my skills, projects, and tell a little about myself.",
	title: "Jesse Conner",
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
