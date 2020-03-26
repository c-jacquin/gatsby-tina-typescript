import React from 'react';

import Banner from '@blocks/banner';
import BlogPostGrid from '@blocks/blog-post-grid';
import BlogPostList from '@blocks/blog-post-list';
import NewsletterForm from '@blocks/newsletter';
import MdContent from '@blocks/md-content';
import PageTitle from '@blocks/title';
import Form from '@blocks/form';
import Map from '@blocks/map';
import SocialShare from '@blocks/social/share';
import Social from '@blocks/social';
import Spacer from '@blocks/spacer';
import Template from '@blocks/templates';
import { Section } from '@typings/page';
import { Site } from '@typings/site';

interface BlockProps extends Section {
  _template: string;
  markdown: any;
  site: Site;
  path: string;
}

const Block: React.FC<BlockProps> = ({ _template, markdown, site, path, ...props }) => {
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
        >
          {props.title}
        </Banner>
      );
    case Template.BLOG_POST_GRID:
      return <BlogPostGrid limit={props.limit} />;
    case Template.BLOG_POST_LIST:
      return <BlogPostList limit={props.limit} />;
    case Template.TITLE:
      return (
        <PageTitle align={props.align} color={props.color} tag={props.tag} backgroundColor={props.backgroundColor}>
          {props.title}
        </PageTitle>
      );
    case Template.CONTENT:
      return markdown && <MdContent content={markdown.childMarkdownRemark.html} style={props.style} />;
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
    case Template.SPACER:
      return <Spacer hasLine={props.hasLine} height={props.height} lineColor={props.lineColor} />;
    case Template.SOCIAL_SHARE:
      return (
        <SocialShare
          title={props.title}
          url={props.url !== '' ? props.url : site.siteUrl + path}
          facebook={props.facebook}
          twitter={props.twitter}
          email={props.email}
          whatsapp={props.whatsapp}
          flexAlign={props.flexAlign}
        />
      );
    case Template.SOCIAL:
      return (
        <Social
          facebook={props.facebook}
          facebookUrl={props.facebookUrl}
          title={props.title}
          twitter={props.twitter}
          twitterUrl={props.twitterUrl}
          rss={props.rss}
          flexAlign={props.flexAlign}
        />
      );
    default:
      return null;
  }
};

export default Block;
