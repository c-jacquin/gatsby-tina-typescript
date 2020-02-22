/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Banner from '../banner';
import BlogPostGrid from '../blog-post-grid';
import BlogPostList from '../blog-post-list';
import NewsletterForm from '../form-newsletter';
import MdContent from '../md-content';
import { PageTitle } from '../title';
import Form from '../form';
import Map from '../map';
import { ColContainer } from './styled';

enum Template {
  BannerBlock = 'BannerBlock',
  ContentBlock = 'ContentBlock',
  TitleBlock = 'TitleBlock',
  BlogPostGridBlock = 'BlogPostGridBlock',
  BlogPostListBlock = 'BlogPostListBlock',
  NewsletterBlock = 'NewsletterBlock',
  FormBlock = 'FormBlock',
  MapBlock = 'MapBlock',
}

interface ColProps {
  blocks: any[];
  allFile: any;
  vmargin: number;
  hmargin: number;
  vpadding: number;
  hpadding: number;
  width: number;
}

const Col: React.FC<ColProps> = ({ blocks, allFile, ...style }) => {
  return (
    <ColContainer {...style}>
      {blocks.map(({ _template, title, content, ...props }: any, idx: number) => {
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

          default:
            return null;
        }
      })}
    </ColContainer>
  );
};

export default Col;
