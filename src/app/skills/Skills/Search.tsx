import type { ReactElement } from "react";
import React, { useId } from "react";

interface Props {
	searchTerm: string;
	onChange: (searchTerm: string) => void;
}
const Search = (props: Props): ReactElement => {
	const id = useId();
	return (
		<div className="mb-4 flex w-full flex-col items-center gap-2 md:flex-row">
			<label htmlFor={id}>Search: </label>
			<input
				id={id}
				type={"text"}
				value={props.searchTerm}
				className={"grow rounded-full!"}
				placeholder={"Search for a skill"}
				onInput={(e) => props.onChange(e.currentTarget.value)}
			/>
		</div>
	);
};

export default Search;
