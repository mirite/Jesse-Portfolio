import "./globals.css";
import type { ReactElement } from "react";
import React from "react";

import { Header, Footer } from "@/app/layout/index";
import Theme from "@/app/layout/Theme";

export const metadata = {
	title: "Jesse Conner",
	description:
		"Welcome to my site! I am a software developer (primarily web) from Toronto, Ontario. This site is a place for me to share my skills, projects, and tell a little about myself.",
};

/**
 * @param root0
 * @param root0.children
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): ReactElement {
	return (
		<html lang="en">
			<body>
				<Theme>
					<Header />
					<main className="w-full grow">{children}</main>
					<Footer />
				</Theme>
			</body>
		</html>
	);
}
