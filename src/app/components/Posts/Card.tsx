import type { ReactElement } from "react";

import Link from "next/link";
import React from "react";

import Arrow from "@/app/components/Posts/Arrow";
import { getPrettyDate } from "@/lib";

interface Props {
	date?: string;
	excerpt?: string;
	link: string;
	title: string;
}
const Card = (props: Props): ReactElement => {
	const { date, excerpt, link, title } = props;
	return (
		<div className="w-full rounded-lg border shadow-xs transition-all hover:bg-black/10 dark:hover:bg-white/10">
			<Link
				className={
					"group prose flex size-full flex-col items-start justify-between p-2 no-underline prose-blue-green dark:prose-invert"
				}
				href={link}
			>
				<div className={"flex w-full items-baseline justify-between"}>
					<h3 className={"m-0"}>{title}</h3>
					<time>{date ? getPrettyDate(date) : null}</time>
				</div>
				<p className={"line-clamp-4 grow"}>{excerpt}</p>
				<div className={"flex w-full items-center justify-end gap-2"}>
					<strong className={"underline"}>Read More</strong>
					<Arrow />
				</div>
			</Link>
		</div>
	);
};

export default Card;
