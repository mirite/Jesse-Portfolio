import type { ReactElement } from "react";
import React from "react";

import { MyImage } from "@/app/components/";

const BioImage = (): ReactElement => {
	return (
		<div>
			<MyImage assetid={"5ErbQQzw8IRhgf5CZfqZsj"} height={250} width={250} />
		</div>
	);
};

export default BioImage;
