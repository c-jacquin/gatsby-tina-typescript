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

type Keyword = { label: string };

interface Query {
  seoJson: any;
  allFile: {
    edges: Array<{
      node: {
        relativePath: string;
        childImageSharp: {
          fixed: {
            src: string;
          };
        };
      };
    }>;
  };
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, meta = [], title }) => {
  const {
    seoJson,
    allFile: { edges },
  } = useStaticQuery<Query>(graphql`
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
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed {
                src
              }
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  seoJson.files = edges;
  const [{ seo, facebook, twitter }] = useGlobalJsonForm(seoJson, _.merge(seoFormConfig, socialFormConfig)) as any;

  const facebookImage = edges.find(({ node: { relativePath } }) => relativePath === facebook.image)?.node.childImageSharp.fixed.src;
  const twitterImage = edges.find(({ node: { relativePath } }) => relativePath === twitter.image)?.node.childImageSharp.fixed.src;

  return (
    <ThemeProvider>
      <Root>
        <Helmet
          title={title || seo.title}
          meta={[
            { name: 'description', content: seo.description },
            { name: 'keywords', content: seo.keywords.map(({ label }: Keyword) => label).join(',') },

            { name: 'twitter:card', content: twitter.card },
            { name: 'twitter:url', content: twitter.url },
            { name: 'twitter:title', content: twitter.title },
            { name: 'twitter:description', content: twitter.description },
            { name: 'twitter:image', content: twitterImage || facebookImage },

            { name: 'og:url', content: facebook.url },
            { name: 'og:type', content: facebook.type },
            { name: 'og:title', content: facebook.title },
            { name: 'og:description', content: facebook.description },
            { name: 'og:image', content: facebookImage || twitterImage },
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
