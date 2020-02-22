import TitleBlock from '../blocks/title';
import BannerBlock from '../blocks/banner';
import ContentBlock from '../blocks/content';
import { BlogPostGridBlock, BlogPostListBlock } from '../blocks/blog';
import FormBlock from '../blocks/form';
import NewsletterBlock from '../blocks/newsletter';
import RowBlock from '../blocks/row';
import MapBlock from '../blocks/map';

export const pageBlocks = {
  label: 'Page Sections',
  name: 'rawJson.sections',
  component: 'blocks',
  templates: {
    TitleBlock,
    BannerBlock,
    ContentBlock,
    BlogPostGridBlock,
    BlogPostListBlock,
    FormBlock,
    NewsletterBlock,
    RowBlock,
  },
};

export const asideBlocks = {
  label: 'Aside Blocks',
  name: 'rawJson.aside',
  component: 'blocks',
  templates: {
    TitleBlock,
    BannerBlock,
    ContentBlock,
    BlogPostListBlock,
    FormBlock,
    NewsletterBlock,
    MapBlock,
  },
};
