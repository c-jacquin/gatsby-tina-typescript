/* eslint-disable react/no-danger */
import { graphql } from 'gatsby';
import { inlineRemarkForm } from 'gatsby-tinacms-remark';
import React from 'react';
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';

import PageLayout from '../../layouts/page';

function Template({ data, isEditing, setIsEditing }: any) {
  console.log(process.env.NODE_ENV);
  return (
    <>
      <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
        <PageLayout>
          <div className="blog-post-container">
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: data?.markdownRemark?.html }} />
          </div>
        </PageLayout>
      </TinaField>
      {process.env.NODE_ENV === 'production' && (
        <button type="button" onClick={() => setIsEditing((p: any) => !p)}>
          {isEditing ? 'Preview' : 'Edit'}
        </button>
      )}
    </>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
      rawFrontmatter
      fileRelativePath
      frontmatter {
        title
      }
      html
    }
  }
`;

export default inlineRemarkForm(Template);
