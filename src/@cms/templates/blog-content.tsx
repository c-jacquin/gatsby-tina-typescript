/* eslint-disable react/no-danger */
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';
import { inlineRemarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

import { PostBody } from './blog-post.styled';
import EditButton from './edit-button';

function ContentTemplate({ data, isEditing, setIsEditing }: any) {
  return (
    <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
      <PostBody dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {process.env.NODE_ENV !== 'production' && <EditButton fixed isEditing={isEditing} onClick={() => setIsEditing((p: any) => !p)} />}
    </TinaField>
  );
}

export default inlineRemarkForm(ContentTemplate);
