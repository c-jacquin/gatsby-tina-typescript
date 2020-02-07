import 'modern-normalize';

import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';

import normalize from '../styles/normalize';
import Header from './header';
import { Main, Root } from './styled';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const PageLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site }: StaticQueryProps): JSX.Element => (
      <Root>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: site.siteMetadata.description },
            { name: 'keywords', content: site.siteMetadata.keywords },
          ]}
        />
        <Global styles={normalize} />
        <Header title={site.siteMetadata.title} />
        <Main>{children}</Main>
      </Root>
    )}
  />
);

export default PageLayout;
