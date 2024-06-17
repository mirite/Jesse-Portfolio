import "./globals.css";
import type { ReactElement } from "react";
import React from "react";

import { Header, Footer } from "@/app/layout/index";

export const metadata = {
	title: "Jesse Conner",
	description:
		"Welcome to my site! I am a software developer (primarily web) from Toronto, Ontario. This site is a place for me to share my skills, projects, and tell a little about myself.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): ReactElement {
	return (
		<html lang="en">
			<body className="relative flex min-h-dvh max-w-full flex-col justify-center bg-white text-blue-green-900 dark:bg-blue-green-900 dark:text-white">
				<Header />
				<main className="w-full grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
