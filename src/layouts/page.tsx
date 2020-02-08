/* eslint-disable @typescript-eslint/no-explicit-any */
import 'modern-normalize';

import { Global } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import normalize from '../styles/normalize';
import Header from './header';
import { Main, Root } from './styled';
import { seoFormConfig } from '../@cms/form-config';

interface SeoData {
  dataJson: {
    title: string;
    description: string;
    keywords: Array<{ label: string }>;
    fileRelativePath: string;
    rawJson: string;
    id: string;
  };
}

interface PageLayoutProps {
  title?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, meta = [], title }) => {
  const { dataJson } = useStaticQuery<SeoData>(graphql`
    query Seo {
      dataJson {
        id
        title
        description
        fileRelativePath
        keywords {
          label
        }
        rawJson
      }
    }
  `);
  const [seo] = useGlobalJsonForm(dataJson as any, seoFormConfig) as any;

  return (
    <Root>
      <Helmet
        title={title || seo.title}
        meta={[
          { name: 'description', content: seo.description },
          { name: 'keywords', content: seo.keywords.map(({ label }: any) => label).join(',') },
          ...meta,
        ]}
      />
      <Global styles={normalize} />
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

export default PageLayout;
