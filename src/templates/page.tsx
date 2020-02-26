import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import { Page, Site } from '@typings/json';
import Blocks, { pageBlocks, asideBlocks } from '@blocks';
import { heroField } from '@layout/hero';
import PageLayout from '@layout/page';
import { seoField } from '@components/seo';
import { Col2Aside, Col2Container, Col2Main } from './styled';

interface PageProps {
  data: {
    page: Page;
    site: Site;
  };
}

enum Layout {
  COL_1 = '1col',
  COL_2 = '2col',
  PAPER = 'paper',
}

const PageTemplate: React.FC<PageProps> = ({ data }) => {
  const [page] = useLocalJsonForm(data.page as any, pageForm) as any;

  switch (page.layout) {
    case Layout.COL_2:
      return (
        <PageLayout page={page}>
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
        <PageLayout page={page}>
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
      label
      hasFooter
      ...HeroBlock
      ...SectionsBlock
      ...AsideBlock
      ...MarkdownBlock
      ...SeoBlock
    }
  }
`;

const pageForm = {
  label: 'Page',
  fields: [
    {
      label: 'Title',
      name: 'rawJson.label',
      component: 'text',
    },
    {
      label: 'layout',
      name: 'rawJson.layout',
      component: 'select',
      options: ['1col', '2col', 'paper'],
    },
    {
      label: 'has footer ?',
      name: 'rawJson.hasFooter',
      component: 'toggle',
    },
    heroField,
    pageBlocks,
    asideBlocks,
    seoField,
  ],
};

export default PageTemplate;
