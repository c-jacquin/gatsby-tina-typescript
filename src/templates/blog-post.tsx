import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';

import { TinaField, TinaForm } from '@tinacms/form-builder';
import { Wysiwyg } from '@tinacms/fields';
import { useLocalRemarkForm, DeleteAction } from 'gatsby-tinacms-remark';

import { PlainInput } from '../components/input/styled';
import { PostBody, PostContainer, PostImage, PostTitle, EditButton } from './styled';

import PageLayout from '../layouts/page';

interface PostProps {
  data: any;
  isEditing: any;
  setIsEditing: any;
}

const Post: React.FC<PostProps> = props => {
  // eslint-disable-next-line react/destructuring-assignment
  const page = props.data.markdownRemark;
  const { isEditing, setIsEditing } = props;

  return (
    <PageLayout>
      <PostContainer>
        <PostImage src={page.frontmatter.image && page.frontmatter.image.childImageSharp.fluid.src} />
        <PostTitle>
          <TinaField name="rawFrontmatter.title" Component={PlainInput}>
            {page.frontmatter.title}
          </TinaField>
        </PostTitle>
        <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
          <PostBody
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </TinaField>
        {process.env.NODE_ENV !== 'production' && (
          <EditButton isEditing={isEditing} onClick={() => setIsEditing((p: boolean) => !p)}>
            {isEditing ? 'Preview' : 'Edit'}
          </EditButton>
        )}
      </PostContainer>
    </PageLayout>
  );
};

const RemarkForm: React.FC<any> = props => {
  const PostForm = useMemo(() => {
    return {
      actions: [DeleteAction],
      fields: [
        {
          label: 'Title',
          name: 'rawFrontmatter.title',
          component: 'text',
        },
        {
          label: 'City',
          name: 'rawFrontmatter.city',
          component: 'text',
        },
        {
          label: 'Place',
          name: 'rawFrontmatter.place',
          component: 'text',
        },
        {
          label: 'Date',
          name: 'rawFrontmatter.date',
          component: 'date',
        },
        {
          label: 'Image',
          name: 'rawFrontmatter.image',
          component: 'image',
          parse: (filename: string) => `../../assets/images/${filename}`,
          uploadDir: () => `/content/images/`,
          previewSrc: (formValues: any) => {
            if (!formValues.frontmatter.image) return '';
            return formValues.frontmatter.image.childImageSharp.fluid.src;
          },
        },
        {
          label: 'Body',
          name: 'rawMarkdownBody',
          component: 'markdown',
        },
        {
          label: 'style',
          name: 'rawFrontmatter.style',
          component: 'css',
        },
      ],
    };
  }, []);
  // eslint-disable-next-line react/destructuring-assignment
  const [markdownRemark, form] = useLocalRemarkForm(props.data.markdownRemark, PostForm);

  return (
    <TinaForm form={form as any}>
      {editingProps => {
        return <Post {...props} data={{ ...props.data, markdownRemark }} {...editingProps} />;
      }}
    </TinaForm>
  );
};

export default RemarkForm;

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      frontmatter {
        title
        date
        place
        city
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
