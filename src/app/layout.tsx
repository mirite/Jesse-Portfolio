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
			<body className="flex justify-center max-w-full bg-lime-400 dark:bg-lime-950 text-neutral-950 dark:text-white">
				<div className="min-h-dvh flex flex-col w-full">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
