import React from 'react';
import {getContent} from "@/app/helpers/connector";
import {Snippet} from "@/types";
import Post from "@/app/components/Posts/Post";
import Skills from "@/app/components/Skills/Skills";

const Page = async () => {
    const {content} = await data();
    return (
        <div>
            <h1>{content?.fields.label}</h1>
            <Post content={content?.fields.content}/>
            <Skills />
        </div>
    );
};

const data = async () => {

    const content = await getContent<Snippet>("6F9MM2vNuE8Vc26iLFKnCO");
    return {content};
}

export async function generateMetadata() {
    return {
        title: "Skills",
        description: ""
    }
}

export default Page;
