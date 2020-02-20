/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import React from 'react';

import Banner from '../banner';
import MdContent from '../md-content';
import { PageTitle } from '../title';
import BlogPostGrid from '../blog-post-grid';
import BlogPostList from '../blog-post-list';

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
          default:
            return null;
        }
      })}
    </>
  );
};

export default Blocks;

export const blocksQuery = graphql`
  fragment Block on PagesJson {
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
