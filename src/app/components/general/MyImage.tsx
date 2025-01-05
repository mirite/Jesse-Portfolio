import type { ImageProps } from "next/image";
import NextImage from "next/image";
import type { ComponentType } from "react";
import React from "react";

import { getAsset } from "@/lib/sources/contentful/connector";

interface Props extends Omit<ImageProps, "src" | "alt"> {
	assetid: string;
}

const MyImage: ComponentType<Props> = async (props) => {
	const asset = await getAsset(props.assetid);
	if (!asset) return <>Asset not found</>;

	const details = asset.file?.details;
	const meta = asset.file;

	if (!details || !meta || !("image" in details)) return null;

	return (
		<div className={"leading-none"}>
			<NextImage
				src={"https:" + meta.url}
				title={""}
				alt={""}
				className={"h-auto max-w-full"}
				{...props}
			/>
		</div>
	);
};

export default MyImage;
