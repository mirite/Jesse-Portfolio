import React, { useId } from "react";

interface Props {
  searchTerm: string;
  onChange: (searchTerm: string) => void;
}
const Search = (props: Props) => {
  const id = useId();
  return (
    <div className="mx-auto flex flex-col items-center md:flex-row gap-2 w-fit">
      <label htmlFor={id}>Search: </label>
      <input
        id={id}
        type={"text"}
        value={props.searchTerm}
        placeholder={"Search for a skill"}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;