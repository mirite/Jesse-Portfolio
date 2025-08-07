import type { ImageProps } from "next/image";
import NextImage from "next/image";
import type { ComponentType } from "react";
import React from "react";

import pic from "../../../../public/Jesse-01.png";

interface Props extends Omit<ImageProps, "alt" | "src"> {
	assetid: string;
}

const MyImage: ComponentType<Props> = (props) => {
	return (
		<div className={"leading-none"}>
			<NextImage
				alt={""}
				className={"h-auto max-w-full"}
				src={pic}
				title={""}
				{...props}
			/>
		</div>
	);
};

export default MyImage;
