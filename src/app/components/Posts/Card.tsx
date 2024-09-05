import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";

import Arrow from "@/app/components/Posts/Arrow";

interface Props {
	title: string;
	link: string;
	excerpt?: string;
}
const Card = (props: Props): ReactElement => {
	const { title, link, excerpt } = props;
	return (
		<div className="w-full rounded-lg shadow outline transition hover:bg-black/10 hover:transition dark:hover:bg-white/10">
			<Link
				className={
					"prose prose-blue-green flex size-full flex-col items-start justify-between p-4 no-underline dark:prose-invert"
				}
				href={link}
			>
				<h3>{title}</h3>
				<p className={"line-clamp-4 grow"}>{excerpt}</p>
				<div className={"flex items-center gap-2"}>
					<strong className={"underline"}>Read More</strong>
					<Arrow />
				</div>
			</Link>
		</div>
	);
};

export default Card;
