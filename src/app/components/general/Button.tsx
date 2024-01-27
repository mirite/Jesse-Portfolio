"use client";
import React, { ButtonHTMLAttributes } from "react";
import { AriaButtonProps } from "react-aria";
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
