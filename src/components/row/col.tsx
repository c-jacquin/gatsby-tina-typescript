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

// interface ColProps {
//   _template: string;
//   title: string;
//   content: string;
//   allFile: any;
//   vmargin: number;
//   hmargin: number;
//   vpadding: number;
//   hpadding: number;
//   width: number;
// }

const Col: React.FC<any> = ({ _template, files, title, ...props }) => {
  switch (_template) {
    case Template.TitleBlock:
      return <PageTitle {...props}>{title}</PageTitle>;
    case Template.ContentBlock:
      return <MdContent {...props} />;
    case Template.BannerBlock:
      return (
        <Banner {...props} files={files}>
          {title}
        </Banner>
      );
    case Template.BlogPostGridBlock:
      return <BlogPostGrid />;
    case Template.BlogPostListBlock:
      return <BlogPostList />;
    case Template.NewsletterBlock:
      return <NewsletterForm {...props} />;
    case Template.FormBlock:
      return <Form {...props} />;
    case Template.MapBlock:
      return <Map {...props} />;
    default:
      return null;
  }
};

export default Col;
