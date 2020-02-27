import { ImageSharp } from './image';

export interface Site {
  title: string;
  appName: string;
  description: string;
  keywords: Array<{ label: string }>;
  siteUrl: string;
  blogPrefix: string;
  rssTitle: string;
  logo: ImageSharp;
}
