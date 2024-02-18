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
		<div className="shadow rounded-lg outline hover:bg-black  dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transition hover:transition w-full">
			<Link
				className={
					"flex flex-col w-full h-full justify-between items-start no-underline p-4  prose prose-blue-green dark:prose-invert"
				}
				href={link}
			>
				<h3>{title}</h3>
				<p className={"grow"}>{excerpt}</p>
				<div className={"flex gap-2 items-center"}>
					<strong className={"underline"}>Read More</strong>
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
