"use client";
import type { ButtonHTMLAttributes, ReactElement } from "react";

import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
	children,
	className = "",
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
	const finalClass = twMerge("cursor-pointer", className);

	return (
		<button className={finalClass} type={"button"} {...props}>
			{children}
		</button>
	);
};

export default Button;
