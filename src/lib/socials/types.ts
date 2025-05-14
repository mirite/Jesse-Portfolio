import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import type { ContentType } from "../supplementalData";

export type Social = {
	icon?: IconProp;
	link: string;
	platform: string;
	username: string;
};
export type SocialSkeleton = ContentType<"social", Social>;
