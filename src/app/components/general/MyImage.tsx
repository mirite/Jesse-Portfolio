import type { ImageProps } from "next/image";
import NextImage from "next/image";
import type { ComponentType } from "react";
import React from "react";

import pic from "../../../../public/Jesse-01.png";

interface Props extends Omit<ImageProps, "src" | "alt"> {
	assetid: string;
}

const MyImage: ComponentType<Props> = async (props) => {
	return (
		<div className={"leading-none"}>
			<NextImage
				src={pic}
				title={""}
				alt={""}
				className={"h-auto max-w-full"}
				{...props}
			/>
		</div>
	);
};

export default MyImage;
