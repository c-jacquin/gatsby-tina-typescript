/* eslint-disable @typescript-eslint/no-use-before-define */
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import TitleBlock from '../@cms/form/blocks/title';
import BannerBlock from '../@cms/form/blocks/banner';
import ContentBlock from '../@cms/form/blocks/content';
import { BlogPostGridBlock, BlogPostListBlock } from '../@cms/form/blocks/blog';
import FormBlock from '../@cms/form/blocks/form';
import NewsletterBlock from '../@cms/form/blocks/newsletter';
import RowBlock from '../@cms/form/blocks/row';
import MapBlock from '../@cms/form/blocks/map';
import SpacerBlock from '../@cms/form/blocks/spacer';
import Blocks from '../components/blocks';
import PageLayout from '../layouts/page';
import { Col2Aside, Col2Container, Col2Main } from './styled';

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
    SpacerBlock,
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
interface ActionsPagProps {
  data: {
    page: any;
    allFile: any;
  };
}

enum Layout {
  COL_1 = '1col',
  COL_2 = '2col',
  PAPER = 'paper',
}

const PageTemplate: React.FC<ActionsPagProps> = ({ data }) => {
  const [page] = useLocalJsonForm(data.page, pageForm) as any;

  switch (page.layout) {
    case Layout.COL_2:
      return (
        <PageLayout>
          <Col2Container>
            <Col2Main>
              <Blocks sections={page.sections} markdown={page.childrenPagesJsonBlockMarkdown} />
            </Col2Main>
            <Col2Aside>
              <Blocks sections={page.aside} />
            </Col2Aside>
          </Col2Container>
        </PageLayout>
      );
    default:
    case Layout.COL_1:
      return (
        <PageLayout>
          <Blocks sections={page.sections} />
        </PageLayout>
      );
  }
};

export const pageQuery = graphql`
  query pageQuery($path: String!) {
    page: pagesJson(path: { eq: $path }) {
      rawJson
      id
      fileRelativePath
      layout
      ...SectionsBlock
      ...AsideBlock
      ...MarkdownBlock
    }
  }
`;

const pageForm = {
  label: 'Page',
  fields: [
    {
      label: 'layout',
      name: 'layout',
      component: 'select',
      options: ['1col', '2col', 'paper'],
    },
    pageBlocks,
    asideBlocks,
  ],
};

export default PageTemplate;
