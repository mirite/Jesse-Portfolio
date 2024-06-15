import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";

interface Props {
	title: string;
	image?: string;
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
				<p className={"grow"}>{excerpt}</p>
				<div className={"flex items-center gap-2"}>
					<strong className={"underline"}>Read More</strong>
					{/* eslint tailwindcss/no-custom-classname: 0 */}
					<svg viewBox={"0 0 500 500"} width={32} height={32}>
						<line
							className={"arrow"}
							x1={0}
							x2={330}
							y1={250}
							y2={250}
							strokeWidth={40}
						></line>
						<line
							className={"arrow-head"}
							x1={350}
							x2={250}
							y1={250}
							y2={150}
							strokeWidth={40}
						></line>
						<line
							className={"arrow-head"}
							x1={350}
							x2={250}
							y1={250}
							y2={350}
							strokeWidth={40}
						></line>
					</svg>
				</div>
			</Link>
		</div>
	);
};

export default Card;
