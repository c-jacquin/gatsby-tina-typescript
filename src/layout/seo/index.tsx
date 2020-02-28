import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { imageField } from '@blocks/image';
import { Site } from '@typings/site';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: Array<{ label: string }>;
  shareThumb?: string;
  shareUrl?: string;
  shareLabel?: string;
  twitterCard?: string;
  ogType?: string;

  meta?: Array<{ name: string; content: string }>;
}

const Seo: React.FC<SeoProps> = ({
  meta = [],
  title,
  description,
  keywords,
  shareThumb,
  shareUrl,
  shareLabel,
  ogType = 'site',
  twitterCard = 'article',
}) => {
  const { site } = useStaticQuery<{ site: Site }>(graphql`
    query Site {
      site: settingsJson(fileRelativePath: { regex: "/site/" }) {
        title
        description
        keywords {
          label
        }
        siteUrl
      }
    }
  `);
  return (
    <Helmet
      title={title || site.title}
      meta={[
        { name: 'description', content: description || site.description },
        { name: 'keywords', content: (keywords || site.keywords).map(({ label }) => label).join(',') },

        { property: 'twitter:card', content: twitterCard },
        { property: 'twitter:url', content: shareUrl ? site.siteUrl + shareUrl : site.siteUrl },
        { property: 'twitter:title', content: shareLabel || title || site.title },
        { property: 'twitter:description', content: description || site.description },
        { property: 'twitter:image', content: site.siteUrl + shareThumb },

        { property: 'og:url', content: shareUrl ? site.siteUrl + shareUrl : site.siteUrl },
        { property: 'og:type', content: ogType },
        { property: 'og:title', content: shareLabel || title || site.title },
        { property: 'og:description', content: description || site.description },
        { property: 'og:image', content: site.siteUrl + shareThumb },
        ...meta,
      ]}
    />
  );
};

export default Seo;

export const seoField = {
  label: 'SEO',
  name: 'rawJson.seo',
  component: 'group',
  fields: [
    {
      label: 'Title',
      name: 'title',
      description: 'The title of the page (SEO)',
      component: 'text',
    },
    {
      label: 'Description',
      name: 'description',
      description: 'A quick description of this page for web browser (SEO)',
      component: 'textarea',
    },
    {
      label: 'Keywords',
      name: 'keywords',
      description: 'A list of keywords corresponding to your site (not used by search engine)',
      component: 'group-list',
      itemProps: (item: { label: string }, idx: number) => ({
        key: idx,
        label: item.label,
      }),
      defaultItem: () => ({
        label: 'enter your keyword',
      }),
      fields: [
        {
          label: 'Keyword',
          name: 'label',
          component: 'text',
        },
      ],
    },
    {
      label: 'Social share label',
      name: 'social.title',
      description: 'The title displayed in facebook/twitter widget',
      component: 'text',
    },
    {
      label: 'Social share description',
      name: 'social.description',
      description: 'The text that will appear in facebook share widget',
      component: 'textarea',
    },
    {
      ...imageField,
      label: 'Social share thumbnail',
      name: 'social.image',
      description: 'The thumbnail of facebook/twitter share widget',
      component: 'image',
    },
  ],
  defaultItem: {
    description: '',
    keywords: [
      {
        label: 'keyword',
      },
      {
        label: 'gatsby',
      },
    ],
    title: '',
    social: {
      description: '',
      image: '../assets/images/logo-big.png',
      title: '',
    },
  },
};

export const seoQuery = graphql`
  fragment SeoBlock on PagesJson {
    seo {
      description
      keywords {
        label
      }
      title
      social {
        description
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
  }
`;
