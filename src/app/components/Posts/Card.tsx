import React from "react";
import Link from "next/link";

interface Props {
	title: string;
	image?: string;
	link: string;
	excerpt?: string;
}
const Card = (props: Props) => {
	const { title, image, link, excerpt } = props;
	return (
		<div className="shadow rounded-lg border hover:bg-slate-400 transition hover:transition w-full mb-4">
			<Link
				className={
					"block w-full h-full justify-center items-center no-underline p-2  prose prose-blue-green dark:prose-invert"
				}
				href={link}
			>
				<h3>{title}</h3>
				<p>{excerpt}</p>
				<div className={"flex gap-1 items-center"}>
					<strong className={"underline"}>Read More</strong>
					<svg viewBox={"0 0 500 500"} width={32} height={32}>
						<line
							className={"arrow"}
							x1={0}
							x2={330}
							y1={250}
							y2={250}
							stroke={"black"}
							strokeWidth={40}
						></line>
						<line
							className={"arrow-head"}
							x1={350}
							x2={250}
							y1={250}
							y2={150}
							stroke={"black"}
							strokeWidth={40}
						></line>
						<line
							className={"arrow-head"}
							x1={350}
							x2={250}
							y1={250}
							y2={350}
							stroke={"black"}
							strokeWidth={40}
						></line>
					</svg>
				</div>
			</Link>
		</div>
	);
};

export default Card;
