import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";

import Arrow from "@/app/components/Posts/Arrow";
import { getPrettyDate } from "@/lib";

interface Props {
	title: string;
	link: string;
	date?: string;
	excerpt?: string;
}
const Card = (props: Props): ReactElement => {
	const { title, link, excerpt, date } = props;
	return (
		<div className="w-full rounded-lg border shadow-sm transition-all hover:bg-black/10 dark:hover:bg-white/10">
			<Link
				className={
					"prose prose-blue-green flex size-full flex-col items-start justify-between p-2 no-underline dark:prose-invert"
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
