/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import React from 'react';

import Banner from '../banner';
import BlogPostGrid from '../blog-post-grid';
import BlogPostList from '../blog-post-list';
import NewsletterForm from '../form-newsletter';
import MdContent from '../md-content';
import { PageTitle } from '../title';
import Form from '../form';
import Map from '../map';
import Row from '../row';

interface BlocksProps {
  sections: any;
  allFile: any;
}

export enum Template {
  BannerBlock = 'BannerBlock',
  ContentBlock = 'ContentBlock',
  TitleBlock = 'TitleBlock',
  BlogPostGridBlock = 'BlogPostGridBlock',
  BlogPostListBlock = 'BlogPostListBlock',
  NewsletterBlock = 'NewsletterBlock',
  FormBlock = 'FormBlock',
  MapBlock = 'MapBlock',
  RowBlock = 'RowBlock',
}

const Blocks: React.FC<BlocksProps> = ({ sections, allFile }) => {
  return sections.map(({ _template, title, content, ...props }: any, idx: number) => {
    switch (_template) {
      case Template.TitleBlock:
        return (
          <PageTitle {...props} key={idx}>
            {title}
          </PageTitle>
        );
      case Template.ContentBlock:
        return <MdContent {...props} markdown={content} key={idx} />;
      case Template.BannerBlock:
        return (
          <Banner {...props} files={allFile.edges} key={idx}>
            {title}
          </Banner>
        );
      case Template.BlogPostGridBlock:
        return <BlogPostGrid />;
      case Template.BlogPostListBlock:
        return <BlogPostList />;
      case Template.NewsletterBlock:
        return <NewsletterForm {...props} key={idx} />;
      case Template.FormBlock:
        return <Form {...props} />;
      case Template.MapBlock:
        return <Map {...props} key={idx} />;
      case Template.RowBlock: {
        console.log('row props => ', props);
        return <Row {...props} />;
      }
      default:
        return null;
    }
  });
};

export default Blocks;

export const sectionsQuery = graphql`
  fragment SectionsBlock on PagesJson {
    sections {
      _template
      style
      content
      image
      parallax
      height
      title
      titleColor
      align
      color
      margin
      tag
      opacity
      apiUrl
      fieldErrorMessage
      errorMessage
      successMessage
      submitLabel
      fields {
        type
        name
        label
        fieldErrorMessage
        required
      }

      hpadding
      vpadding
      hmargin
      vmargin
      flexAlign
      flexReverse
      cols {
        hpadding
        vpadding
        hmargin
        vmargin
        width
        blocks {
          _template
          title
          color
          align
          margin
          tag
          lat
          lng
          zoom
          flex
          height
          width
          fields {
            name
            type
            required
            label
            fieldErrorMessage
          }
        }
      }
    }
  }
`;

export const asideQuery = graphql`
  fragment AsideBlock on PagesJson {
    aside {
      _template
      apiUrl
      title
      fieldErrorMessage
      errorMessage
      successMessage
      submitLabel
    }
  }
`;

export const imgQuery = graphql`
  fragment FluidImg on FileConnection {
    edges {
      node {
        relativePath
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`;
