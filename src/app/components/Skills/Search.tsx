import React, {useId} from 'react';

interface Props {
    searchTerm: string;
    onChange: (searchTerm: string) => void;
}
const Search = (props: Props) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Search: </label>
            <input id={id} value={props.searchTerm} onInput={(e)=>props.onChange(e.currentTarget.value)}/>
        </div>
    );
};

export default Search;
