import React from 'react';
import {Skill} from "@/types";
import PillList from "@/app/components/general/PillList";

const LinkDisplay = (props: {links:Required<Skill>["projects"]}) => {
    return (
        <PillList>
            {Object.entries(props.links).map(([name, link]) => (
                <li className="pill" key={name}><a href={link}>{name}</a></li>
            ))}
        </PillList>
    );
};

export default LinkDisplay;
