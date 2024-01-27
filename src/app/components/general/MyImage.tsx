import React from "react";
import { getAsset } from "@/lib/";
import NextImage, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src" | "alt"> {
	assetid: string;
}

const MyImage = async (props: Props) => {
	const asset = await getAsset(props.assetid);
	if (!asset) return <>Asset not found</>;

	const details = asset.file?.details;
	const meta = asset.file;

	if (!details || !meta || !("image" in details)) return <></>;

	return (
		<div className={"leading-none"}>
			<NextImage
				src={"https:" + meta.url}
				title={""}
				alt={""}
				className={"max-w-full h-auto"}
				{...props}
			/>
		</div>
	);
};

export default MyImage;
