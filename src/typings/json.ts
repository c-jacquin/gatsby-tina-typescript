import { CSSProperties } from 'react';

import themeJson from '../../content/settings/theme.json';
import menusJson from '../../content/settings/menus.json';
import siteJson from '../../content/settings/site.json';
import pageJson from '../../content/pages/stub.json';
import { TitleTag } from './form';
import { ImageSharp } from './image';

export interface Theme extends BaseTheme {
  hero: { image: ImageSharp } & BaseTheme['hero'];
  header: { logo: ImageSharp; mobileLogo: ImageSharp } & BaseTheme['header'];
}

export interface Page extends BasePage {
  hero: { image: ImageSharp } & BasePage['hero'];
  seo: { social: { image: ImageSharp } & BasePage['seo']['social'] } & BasePage['seo'];
  sections: Array<
    {
      align: CSSProperties['textAlign'];
      tag: TitleTag;
      image: ImageSharp;
      cols: Array<{ align: CSSProperties['textAlign']; tag: TitleTag; image: ImageSharp } & BasePage['sections'][0]['cols'][0]>;
    } & BasePage['sections'][0]
  >;
}

export type BaseTheme = typeof themeJson;
export type BasePage = typeof pageJson;
export type Menus = typeof menusJson;
export type Site = typeof siteJson;
