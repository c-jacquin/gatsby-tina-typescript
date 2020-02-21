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

interface BlocksProps {
  sections: any;
  allFile: any;
}

enum template {
  BannerBlock = 'BannerBlock',
  ContentBlock = 'ContentBlock',
  TitleBlock = 'TitleBlock',
  BlogPostGridBlock = 'BlogPostGridBlock',
  BlogPostListBlock = 'BlogPostListBlock',
  NewsletterBlock = 'NewsletterBlock',
  FormBlock = 'FormBlock',
}

const Blocks: React.FC<BlocksProps> = ({ sections, allFile }) => {
  return (
    <>
      {sections.map(({ _template, title, content, ...props }: any, idx: number) => {
        switch (_template) {
          case template.TitleBlock:
            return (
              <PageTitle {...props} key={idx}>
                {title}
              </PageTitle>
            );
          case template.ContentBlock:
            return <MdContent {...props} markdown={content} key={idx} />;
          case template.BannerBlock:
            return (
              <Banner {...props} files={allFile.edges} key={idx}>
                {title}
              </Banner>
            );
          case template.BlogPostGridBlock:
            return <BlogPostGrid />;
          case template.BlogPostListBlock:
            return <BlogPostList />;
          case template.NewsletterBlock:
            return <NewsletterForm {...props} key={idx} />;
          case template.FormBlock:
            return <Form {...props} />;
          default:
            return null;
        }
      })}
    </>
  );
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
