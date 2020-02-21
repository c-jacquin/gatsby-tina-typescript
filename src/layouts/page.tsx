/* eslint-disable @typescript-eslint/no-explicit-any */
import 'modern-normalize';

import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import { ParallaxProvider } from 'react-scroll-parallax';
import { withPlugin } from 'tinacms';

import BlogPostCreator from '../@cms/creator/blog-post';
import seoFormConfig from '../@cms/form/seo';
import { getThumbnail } from '../@cms/helpers/thumbnail';
import socialFormConfig from '../@cms/form/social';
import ThemeProvider from '../components/theme-provider';
import { MenuProvider } from '../context/side-menu';
import Footer from './footer';
import Header from './header';
import SideMenu from './side-menu';
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
        ...FluidImg
      }
    }
  `);
  seoJson.files = edges;
  const [{ seo, facebook, twitter }] = useGlobalJsonForm(seoJson, _.merge(seoFormConfig, socialFormConfig)) as any;

  const facebookImage = getThumbnail(edges, facebook.image);
  const twitterImage = getThumbnail(edges, twitter.image);

  return (
    <ParallaxProvider>
      <ThemeProvider>
        <MenuProvider>
          <Root id="root">
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
            <SideMenu />
            <Main id="main">{children}</Main>
            <Footer />
          </Root>
        </MenuProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default withPlugin(PageLayout, BlogPostCreator);
