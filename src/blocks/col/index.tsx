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
import { Col as ColProps } from '@typings/page';
import { containerForm } from '@blocks/common';
import { ColContainer } from './styled';

const Col: React.FC<ColProps> = ({ _template, hmargin, vmargin, vpadding, hpadding, flex, ...props }) => {
  return (
    <ColContainer hmargin={hmargin} vmargin={vmargin} vpadding={vpadding} hpadding={hpadding} flex={flex}>
      {(() => {
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
            return (
              <Map lat={props.lat} lng={props.lng} zoom={props.zoom} width={props.width} height={props.height} flexMap={props.flexMap} />
            );
          default:
            return null;
        }
      })()}
    </ColContainer>
  );
};

export default Col;

const colFields = [
  {
    label: 'flex',
    name: 'flex',
    component: 'slider',
    min: 1,
    max: 10,
    step: 1,
  },
  ...containerForm,
];

export const makeColBlock = (block: any) => {
  return {
    ...block,
    fields: [...colFields, ...block.fields],
    defaultItem: {
      ...block.defaultItem,
      flex: 1,
      hmargin: 0,
      vmargin: 0,
      hpadding: 0,
      vpadding: 0,
    },
  };
};

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
      ...SocialShareColsBlock
    }
  }
`;
