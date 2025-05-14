import type { ReactElement } from "react";

import React, { useId } from "react";

interface Props {
	onChange: (searchTerm: string) => void;
	searchTerm: string;
}
const Search = (props: Props): ReactElement => {
	const id = useId();
	return (
		<div className="mb-4 flex w-full flex-col items-center gap-2 md:flex-row">
			<label htmlFor={id}>Search: </label>
			<input
				className={"grow rounded-full!"}
				id={id}
				onInput={(e) => props.onChange(e.currentTarget.value)}
				placeholder={"Search for a skill"}
				type={"text"}
				value={props.searchTerm}
			/>
		</div>
	);
};

export default Search;
