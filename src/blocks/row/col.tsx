import { graphql } from 'gatsby';
import React from 'react';

import Banner from '@blocks/banner';
import BlogPostGrid from '@blocks/blog-post-grid';
import BlogPostList from '@blocks/blog-post-list';
import Form from '@blocks/form';
import Map from '@blocks/map';
import NewsletterForm from '@blocks/newsletter';
// import MdContent from '@blocks/md-content';
import PageTitle from '@blocks/title';
import Template from '@blocks/templates';
import { Page } from '@typings/json';

const Col: React.FC<Page['sections'][0]['cols'][0]> = ({ _template, ...props }) => {
  switch (_template) {
    case Template.TITLE:
      return (
        <PageTitle align={props.align} color={props.color} margin={props.margin} tag={props.tag}>
          {props.title}
        </PageTitle>
      );
    // case Template.ContentBlock:
    //   return <MdContent {...props} />;
    case Template.BANNER:
      return (
        <Banner
          color={props.color}
          height={props.height}
          image={props.image}
          tag={props.tag}
          opacity={props.opacity}
          parallax={props.parallax}
        >
          {props.title}
        </Banner>
      );
    case Template.BLOG_POST_GRID:
      return <BlogPostGrid limit={props.limit} />;
    case Template.BLOG_POST_LIST:
      return <BlogPostList limit={props.limit} />;
    case Template.NEWSLETTER:
      return (
        <NewsletterForm
          apiUrl={props.apiUrl}
          errorMessage={props.errorMessage}
          title={props.title}
          successMessage={props.successMessage}
          fieldErrorMessage={props.fieldErrorMessage}
        />
      );
    case Template.FORM:
      return (
        <Form
          apiUrl={props.apiUrl}
          errorMessage={props.errorMessage}
          fields={props.fields}
          submitLabel={props.submitLabel}
          successMessage={props.successMessage}
        />
      );
    case Template.MAP:
      return <Map lat={props.lat} lng={props.lng} zoom={props.zoom} width={props.width} height={props.height} flexMap={props.flexMap} />;
    default:
      return null;
  }
};

export default Col;

export const ColFragment = graphql`
  fragment ColsBlock on PagesJsonSections {
    cols {
      _template
      hpadding
      vpadding
      hmargin
      vmargin
      flex
      ...TitleColsBlock
      ...BannerColsBlock
      ...NewsletterColsBlock
      ...FormColsBlock
      ...MapColsBlock
      ...BlogPostListColsBlock
    }
  }
`;
