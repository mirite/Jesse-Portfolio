"use client";
import React, { ButtonHTMLAttributes, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { twMerge } from "tailwind-merge";

const Button = ({
	children,
	className = "",
	...props
}: AriaButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
	const finalClass = twMerge("btn", className);
	const ref = useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton(props as AriaButtonProps, ref);

	return (
		<button className={finalClass} {...buttonProps} ref={ref}>
			{children}
		</button>
	);
};

export default Button;
