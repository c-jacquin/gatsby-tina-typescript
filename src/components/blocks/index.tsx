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
  markdown?: any;
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

const Blocks: React.FC<BlocksProps> = ({ sections, markdown }) => {
  return sections.map(({ _template, title, style, ...props }: any, idx: number) => {
    switch (_template) {
      case Template.TitleBlock:
        return (
          <PageTitle {...props} key={idx}>
            {title}
          </PageTitle>
        );
      case Template.ContentBlock:
        return <MdContent content={markdown[idx].childMarkdownRemark.html} style={style} key={idx} />;
      case Template.BannerBlock:
        return (
          <Banner {...props} key={idx}>
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
        return <Row {...props} key={idx} />;
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
      content
      image {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        color
        align
        margin
        tag
        lat
        lng
        zoom
        flex
        flexMap
        content
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

export const jsonMarkdownQuery = graphql`
  fragment MarkdownBlock on PagesJson {
    childrenPagesJsonBlockMarkdown {
      childMarkdownRemark {
        html
      }
    }
  }
`;
