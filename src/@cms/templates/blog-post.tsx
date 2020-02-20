/* eslint-disable react/no-danger */
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';
import { graphql } from 'gatsby';
import { inlineRemarkForm, useLocalRemarkForm } from 'gatsby-tinacms-remark';
import React, { useEffect } from 'react';

import PageLayout from '../../layouts/page';
import blogPostForm from '../form/blog-post';
import { PostBody, PostContainer, PostImage, PostTitle } from './blog-post.styled';
import EditButton from './edit-button';
import ContentTemplate from './blog-content';

function Template({ data }: any) {
  const [{ frontmatter }] = useLocalRemarkForm(data.markdownRemark, blogPostForm) as any;

  return (
    <PageLayout>
      <PostContainer>
        <PostImage src={frontmatter.image && frontmatter.image.childImageSharp.fluid.src} />
        <PostTitle>{frontmatter.title}</PostTitle>
        <ContentTemplate data={data} />
      </PostContainer>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      html
    }
  }
`;

export default Template;
