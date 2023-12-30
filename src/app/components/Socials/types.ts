import {ContentType} from "@/types";

export type Social  = ContentType<"social",{
  platform: string;
  link: string;
  username: string;
}>;
