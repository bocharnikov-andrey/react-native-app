import { ReactNode } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../constants/icons";

export const socialIconList = ["twitter", "tikTok", "youtube", "facebook", "instagram"];

export const socialIcons: Record<string, ReactNode> = {
  twitter: <TwitterIcon />,
  tikTok: <TikTokIcon />,
  youtube: <YoutubeIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
};
