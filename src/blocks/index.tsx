import { graphql } from 'gatsby';
import React from 'react';

import Banner, { BannerBlock } from '@blocks/banner';
import BlogPostGrid, { BlogPostGridBlock } from '@blocks/blog-post-grid';
import BlogPostList, { BlogPostListBlock } from '@blocks/blog-post-list';
import Grid, { GridBlock } from '@blocks/grid';
import NewsletterForm, { NewsletterBlock } from '@blocks/newsletter';
import MdContent, { ContentBlock } from '@blocks/md-content';
import PageTitle, { TitleBlock } from '@blocks/title';
import Form, { FormBlock } from '@blocks/form';
import Map, { MapBlock } from '@blocks/map';
import Row, { RowBlock } from '@blocks/row';
import Spacer, { SpacerBlock } from '@blocks/spacer';
import Template from '@blocks/templates';
import { Section } from '@typings/page';
import { Markdown } from '@typings/markdown';

interface BlocksProps {
  sections: Section[];
  markdown?: Markdown[];
}

const Blocks: React.FC<BlocksProps> = ({ sections, markdown }) => (
  <>
    {sections.map(({ _template, ...props }, idx: number) => {
      switch (_template) {
        case Template.BANNER:
          return (
            <Banner
              color={props.color}
              height={props.height}
              image={props.image}
              tag={props.tag}
              opacity={props.opacity}
              parallax={props.parallax}
              key={idx}
            >
              {props.title}
            </Banner>
          );
        case Template.BLOG_POST_GRID:
          return <BlogPostGrid limit={props.limit} key={idx} />;
        case Template.BLOG_POST_LIST:
          return <BlogPostList limit={props.limit} key={idx} />;
        case Template.TITLE:
          return (
            <PageTitle align={props.align} color={props.color} margin={props.margin} tag={props.tag} key={idx}>
              {props.title}
            </PageTitle>
          );
        case Template.CONTENT:
          return markdown && <MdContent content={markdown[idx].childMarkdownRemark.html} style={props.style} key={idx} />;
        case Template.NEWSLETTER:
          return (
            <NewsletterForm
              apiUrl={props.apiUrl}
              errorMessage={props.errorMessage}
              title={props.title}
              successMessage={props.successMessage}
              fieldErrorMessage={props.fieldErrorMessage}
              key={idx}
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
              key={idx}
            />
          );
        case Template.MAP:
          return (
            <Map
              lat={props.lat}
              lng={props.lng}
              zoom={props.zoom}
              width={props.width}
              height={props.height}
              flexMap={props.flexMap}
              key={idx}
            />
          );
        case Template.ROW:
          return (
            <Row
              cols={props.cols}
              flexAlign={props.flexAlign}
              flexReverse={props.flexReverse}
              hmargin={props.hmargin}
              hpadding={props.hpadding}
              vmargin={props.vmargin}
              vpadding={props.vpadding}
              key={idx}
            />
          );
        case Template.GRID:
          return (
            <Grid
              cols={props.cols}
              gutter={props.gutter}
              lgCol={props.lgCol}
              mdCol={props.mdCol}
              smCol={props.smCol}
              xlCol={props.xlCol}
              key={idx}
            />
          );
        case Template.SPACER:
          return <Spacer hasLine={props.hasLine} height={props.height} lineColor={props.lineColor} key={idx} />;
        default:
          return null;
      }
    })}
  </>
);

export default Blocks;

export const sectionsQuery = graphql`
  fragment SectionsBlock on PagesJson {
    sections {
      _template
      ...TitleBlock
      ...MarkdownContentBlock
      ...BannerBlock
      ...SpacerBlock
      ...NewsletterBlock
      ...MapBlock
      ...FormBlock
      ...RowBlock
      ...BlogPostGridBlock
      ...BlogPostListBlock
      ...GridBlock
    }
  }
`;

export const asideQuery = graphql`
  fragment AsideBlock on PagesJson {
    aside {
      _template
      ...TitleAsideBlock
      ...BannerAsideBlock
      ...SpacerAsideBlock
      ...NewsletterAsideBlock
      ...MapAsideBlock
      ...FormAsideBlock
      ...BlogPostGridAsideBlock
      ...BlogPostListAsideBlock
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

export const pageBlocks = {
  label: 'Page Sections',
  name: 'rawJson.sections',
  component: 'blocks',
  templates: {
    BannerBlock,
    BlogPostGridBlock,
    BlogPostListBlock,
    ContentBlock,
    FormBlock,
    GridBlock,
    NewsletterBlock,
    RowBlock,
    SpacerBlock,
    TitleBlock,
  },
};

export const asideBlocks = {
  label: 'Aside Blocks',
  name: 'rawJson.aside',
  component: 'blocks',
  templates: {
    BannerBlock,
    BlogPostGridBlock,
    BlogPostListBlock,
    // ContentBlock,
    FormBlock,
    MapBlock,
    NewsletterBlock,
    SpacerBlock,
    TitleBlock,
  },
};
