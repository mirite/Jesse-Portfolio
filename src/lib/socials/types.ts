import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import type { ContentType } from "../supplementalData";

export type SocialSkeleton = ContentType<"social", Social>;
export type Social = {
	platform: string;
	link: string;
	username: string;
	icon?: IconProp;
};
