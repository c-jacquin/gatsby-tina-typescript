import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { BannerBlock } from '@blocks/banner';
import { BlogPostGridBlock } from '@blocks/blog-post-grid';
import { BlogPostListBlock } from '@blocks/blog-post-list';
import { GridBlock } from '@blocks/grid';
import { NewsletterBlock } from '@blocks/newsletter';
import { ContentBlock } from '@blocks/md-content';
import { TitleBlock } from '@blocks/title';
import { FormBlock } from '@blocks/form';
import { MapBlock } from '@blocks/map';
import { RowBlock } from '@blocks/row';
import { SocialShareBlock } from '@blocks/social/share';
import { SocialBlock } from '@blocks/social';
import { SpacerBlock } from '@blocks/spacer';
import { Section } from '@typings/page';
import { Markdown } from '@typings/markdown';
import { Site } from '@typings/site';

import Cell from '@blocks/cell';
import { containerizeBlock } from './cell/container';

interface BlocksProps {
  sections: Section[];
  markdown?: Markdown[];
  path?: string;
}

const Blocks: React.FC<BlocksProps> = ({ sections, markdown, path = '' }) => {
  const { site } = useStaticQuery<{ site: Site }>(graphql`
    query BlockSite {
      site: settingsJson(fileRelativePath: { regex: "/site/" }) {
        siteUrl
        blogPrefix
      }
    }
  `);
  return (
    <>
      {sections.map((props, idx: number) => (
        <Cell {...props} markdown={markdown && markdown[idx]} site={site} path={path} />
      ))}
    </>
  );
};

export default Blocks;

export const sectionsQuery = graphql`
  fragment SectionsBlock on PagesJson {
    sections {
      _template
      ...TitleBlock
      ...MarkdownContentBlock
      ...BannerBlock
      ...SpacerBlock
      ...NewsletterBlock
      ...MapBlock
      ...FormBlock
      ...RowBlock
      ...BlogPostGridBlock
      ...BlogPostListBlock
      ...GridBlock
      ...SocialShareBlock
      ...SocialBlock
      ...Container
    }
  }
`;

export const asideQuery = graphql`
  fragment AsideBlock on PagesJson {
    aside {
      _template
      ...TitleAsideBlock
      ...BannerAsideBlock
      ...SpacerAsideBlock
      ...NewsletterAsideBlock
      ...MapAsideBlock
      ...FormAsideBlock
      ...BlogPostGridAsideBlock
      ...BlogPostListAsideBlock
      ...SocialShareAsideBlock
      ...SocialAsideBlock
      ...ContainerAside
    }
  }
`;

// export const jsonMarkdownQuery = graphql`
//   fragment MarkdownBlock on PagesJson {
//     childrenPagesJsonBlockMarkdown {
//       childMarkdownRemark {
//         html
//       }
//     }
//   }
// `;

console.log('DAAAAAAT shit ', containerizeBlock(TitleBlock));

export const pageBlocks = {
  label: 'Page Sections',
  name: 'rawJson.sections',
  component: 'blocks',
  templates: {
    BannerBlock: containerizeBlock(BannerBlock),
    BlogPostGridBlock: containerizeBlock(BlogPostGridBlock),
    BlogPostListBlock: containerizeBlock(BlogPostListBlock),
    ContentBlock: containerizeBlock(ContentBlock),
    FormBlock: containerizeBlock(FormBlock),
    GridBlock: containerizeBlock(GridBlock),
    MapBlock: containerizeBlock(MapBlock),
    NewsletterBlock: containerizeBlock(NewsletterBlock),
    RowBlock: containerizeBlock(RowBlock),
    SpacerBlock: containerizeBlock(SpacerBlock),
    TitleBlock: containerizeBlock(TitleBlock),
    SocialShareBlock: containerizeBlock(SocialShareBlock),
    SocialBlock: containerizeBlock(SocialBlock),
  },
};

export const asideBlocks = {
  label: 'Aside Blocks',
  name: 'rawJson.aside',
  component: 'blocks',
  templates: {
    BannerBlock,
    BlogPostGridBlock,
    BlogPostListBlock,
    // ContentBlock,
    FormBlock,
    MapBlock,
    NewsletterBlock,
    SpacerBlock,
    TitleBlock,
    SocialShareBlock,
    SocialBlock,
  },
};
