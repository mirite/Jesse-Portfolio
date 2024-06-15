import "./globals.css";
import type { ReactElement } from "react";
import React from "react";

import { Header, Footer } from "@/app/layout/index";

export const metadata = {
	title: "Jesse Conner",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): ReactElement {
	return (
		<html lang="en">
			<body className="flex max-w-full justify-center bg-white text-blue-green-900 dark:bg-blue-green-900 dark:text-white">
				<div className="flex min-h-dvh w-full flex-col">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
