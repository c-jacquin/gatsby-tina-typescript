/* eslint-disable @typescript-eslint/no-explicit-any */
import 'modern-normalize';

import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';

import seoFormConfig from '../@cms/form/seo';
import socialFormConfig from '../@cms/form/social';
import ThemeProvider from '../components/theme-provider';
import Header from './header';
import { Main, Root } from './styled';

interface PageLayoutProps {
  title?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, meta = [], title }) => {
  const { seoJson } = useStaticQuery(graphql`
    query Seo {
      seoJson {
        id
        rawJson
        fileRelativePath
        seo {
          appName
          author
          copyright
          description
          keywords {
            label
          }
          title
        }
        facebook {
          description
          image
          title
          type
          url
        }
        twitter {
          card
          description
          image
          title
        }
      }
    }
  `);
  const [{ seo, facebook, twitter }] = useGlobalJsonForm(seoJson, _.merge(seoFormConfig, socialFormConfig)) as any;

  return (
    <ThemeProvider>
      <Root>
        <Helmet
          title={title || seo.title}
          meta={[
            { name: 'description', content: seo.description },
            { name: 'keywords', content: seo.keywords.map(({ label }: any) => label).join(',') },

            { name: 'twitter:card', content: twitter.card },
            { name: 'twitter:url', content: twitter.url },
            { name: 'twitter:title', content: twitter.title },
            { name: 'twitter:description', content: twitter.description },
            { name: 'twitter:image', content: twitter.image },

            { name: 'og:url', content: facebook.url },
            { name: 'og:type', content: facebook.type },
            { name: 'og:title', content: facebook.title },
            { name: 'og:description', content: facebook.description },
            { name: 'og:image', content: facebook.image },
            ...meta,
          ]}
        />
        <Header />
        <Main>{children}</Main>
      </Root>
    </ThemeProvider>
  );
};

export default PageLayout;
