import "./globals.scss";
import { Header, Footer } from "@/app/layout/index";
import React from "react";

export const metadata = {
	title: "Jesse Conner",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex justify-center max-w-full bg-white dark:bg-black text-black dark:text-white">
				<div className="max-w-screen-2xl min-h-dvh mx-3 w-full flex flex-col">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
