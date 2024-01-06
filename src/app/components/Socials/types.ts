import { ContentType } from "@/types";

export type SocialSkeleton = ContentType<"social", Social>;

export type Social = {
  platform: string;
  link: string;
  username: string;
};
