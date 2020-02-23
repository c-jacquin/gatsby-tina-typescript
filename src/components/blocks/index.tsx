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
import Spacer from '../spacer';

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
  SpacerBlock = 'SpacerBlock',
}

const Blocks: React.FC<BlocksProps> = ({ sections, allFile }) => {
  return sections.map(({ _template, title, ...props }: any, idx: number) => {
    switch (_template) {
      case Template.TitleBlock:
        return (
          <PageTitle {...props} key={idx}>
            {title}
          </PageTitle>
        );
      case Template.ContentBlock:
        return <MdContent {...props} key={idx} />;
      case Template.BannerBlock:
        return (
          <Banner {...props} files={allFile.edges} key={idx}>
            {title}
          </Banner>
        );
      case Template.BlogPostGridBlock:
        return <BlogPostGrid {...props} />;
      case Template.BlogPostListBlock:
        return <BlogPostList {...props} />;
      case Template.NewsletterBlock:
        return <NewsletterForm {...props} key={idx} />;
      case Template.FormBlock:
        return <Form {...props} />;
      case Template.MapBlock:
        return <Map {...props} key={idx} />;
      case Template.RowBlock:
        return <Row {...props} files={allFile.edges} key={idx} />;
      case Template.SpacerBlock:
        return <Spacer {...props} key={idx} />;
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
      markdown
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
      limit
      fieldErrorMessage
      errorMessage
      successMessage
      submitLabel
      hasLine
      lineColor
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
        _template
        hpadding
        vpadding
        hmargin
        vmargin
        width
        title
        limit
        image
        color
        align
        margin
        tag
        lat
        lng
        zoom
        flex
        flexMap
        markdown
        style
        height
        submitLabel
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
`;

export const asideQuery = graphql`
  fragment AsideBlock on PagesJson {
    aside {
      _template
      limit
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
