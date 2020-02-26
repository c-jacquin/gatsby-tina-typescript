import { TinaField, TinaForm } from '@tinacms/form-builder';
import { Wysiwyg } from '@tinacms/fields';
import { graphql } from 'gatsby';
import { useLocalRemarkForm, DeleteAction } from 'gatsby-tinacms-remark';
import React, { useMemo } from 'react';

import { PlainInput } from '@components/input/styled';
import PostLayout from 'layout/post';
import { Parallax } from 'react-scroll-parallax';
import { Post } from '@typings/post';
import { Theme } from '@typings/json';
import { PostBody, PostContainer, PostImage, PostTitle, EditButton } from './styled';

interface PostProps {
  data: {
    post: Post;
    theme: Theme;
  };
  isEditing: boolean;
  setIsEditing: (p: (p: boolean) => boolean) => void;
}

const PostTemplate: React.FC<PostProps> = ({ data: { post, theme }, isEditing, setIsEditing }) => {
  return (
    <PostLayout post={post} hero={theme.hero}>
      <Parallax y={[-20, 0]}>
        <PostContainer>
          {!post.frontmatter.ownHero && <PostImage src={post.frontmatter.image.childImageSharp.fluid.src} />}
          {!post.frontmatter.ownHero && (
            <PostTitle>
              <TinaField name="rawFrontmatter.title" Component={PlainInput}>
                {post.frontmatter.title}
              </TinaField>
            </PostTitle>
          )}
          <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
            <PostBody
              dangerouslySetInnerHTML={{
                __html: post.html,
              }}
            />
          </TinaField>
          {process.env.NODE_ENV !== 'production' && (
            <EditButton isEditing={isEditing} onClick={() => setIsEditing((p: boolean) => !p)}>
              {isEditing ? 'Preview' : 'Edit'}
            </EditButton>
          )}
        </PostContainer>
      </Parallax>
    </PostLayout>
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
          label: 'Use image post as hero header ?',
          name: 'rawFrontmatter.ownHero',
          component: 'toggle',
        },
        {
          label: 'Image',
          name: 'rawFrontmatter.image',
          component: 'image',
          parse: (filename: string) => `../assets/images/${filename}`,
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
        return <PostTemplate {...props} data={{ ...props.data, markdownRemark }} {...editingProps} />;
      }}
    </TinaForm>
  );
};

export default RemarkForm;

export const postQuery = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      frontmatter {
        title
        description
        keywords {
          label
        }
        date
        place
        city
        ownHero
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      excerpt(pruneLength: 160)
      html
    }
    theme: settingsJson(fileRelativePath: { regex: "/theme/" }) {
      ...HeroThemeBlock
    }
  }
`;
