"use client";
import type { ButtonHTMLAttributes } from "react";
import React from "react";
import type { AriaButtonProps } from "react-aria";
import { twMerge } from "tailwind-merge";

const Button = ({
	children,
	className = "",
	...props
}: AriaButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
	const finalClass = twMerge("btn", className);

	return (
		<button className={finalClass} {...props}>
			{children}
		</button>
	);
};

export default Button;
