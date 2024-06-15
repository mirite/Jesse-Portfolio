import type { PropsWithChildren, ReactElement } from "react";
import React from "react";

interface Props extends PropsWithChildren {
	label: string;
	id: string;
}
const Field = ({ children, label, id }: Props): ReactElement => {
	return (
		<div className="flex flex-col p-1">
			<label htmlFor={id}>{label}</label>
			{children}
		</div>
	);
};

export default Field;
