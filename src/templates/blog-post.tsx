import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';
import { graphql } from 'gatsby';
import { useLocalRemarkForm, DeleteAction, inlineRemarkForm } from 'gatsby-tinacms-remark';
import { RemarkNode } from 'gatsby-tinacms-remark/src/remark-node';
import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

import Map from '@blocks/map';
import { PlainInput } from '@components/input/styled';
import PostLayout from '@layout/post';
import { Post } from '@typings/post';
import { Theme } from '@typings/theme';
import { Site } from '@typings/site';
import { PostBody, PostContainer, PostImage, PostTitle, EditButton, ShareButtons } from './styled';

interface BlogPostTemplateProps {
  data: {
    markdownRemark: Post & RemarkNode;
    theme: Theme;
    site: Site;
  };
  isEditing: boolean;
  setIsEditing: (p: (p: boolean) => boolean) => void;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data: { markdownRemark, theme, site }, isEditing, setIsEditing }) => {
  useLocalRemarkForm(markdownRemark, blogPostForm);

  useEffect(() => {
    if (isEditing) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isEditing]);

  return (
    <PostLayout post={markdownRemark} hero={theme.hero}>
      <Parallax y={[-20, 0]}>
        <PostContainer isEditing={isEditing}>
          {!markdownRemark.frontmatter.ownHero && <PostImage src={markdownRemark.frontmatter.image.childImageSharp.fluid.src} />}
          {!markdownRemark.frontmatter.ownHero && (
            <PostTitle>
              <TinaField name="rawFrontmatter.title" Component={PlainInput}>
                {markdownRemark.frontmatter.title}
              </TinaField>
            </PostTitle>
          )}
          {markdownRemark.frontmatter.map && !!markdownRemark.frontmatter.location && (
            <Map
              height={300}
              lat={markdownRemark.frontmatter.location.lat}
              lng={markdownRemark.frontmatter.location.lng}
              zoom={markdownRemark.frontmatter.zoom}
            />
          )}
          <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
            <PostBody
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />
          </TinaField>
          {markdownRemark.frontmatter.share && <ShareButtons url={`${site.siteUrl}`} />}

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

export default inlineRemarkForm(BlogPostTemplate);

export const blogPostForm = {
  label: 'Blog Post',
  actions: [DeleteAction],
  fields: [
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      component: 'text',
    },
    {
      label: 'Path',
      description: 'change the url of the blog post',
      name: 'rawFrontmatter.path',
      component: 'text',
    },
    {
      label: 'Date',
      name: 'rawFrontmatter.date',
      component: 'date',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
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
      previewSrc: (formValues: Post) => {
        if (!formValues.frontmatter.image) return '';
        return formValues.frontmatter.image.childImageSharp.fluid.src;
      },
    },
    {
      label: 'location',
      name: 'rawFrontmatter.location',
      component: 'location',
    },
    {
      label: 'Display a map on top ?',
      name: 'rawFrontmatter.map',
      component: 'toggle',
    },
    {
      label: 'map zoom',
      name: 'rawFrontmatter.zoom',
      component: 'slider',
      step: 1,
      min: 1,
      max: 19,
    },
    {
      label: 'Sharable on social network ?',
      name: 'rawFrontmatter.share',
      component: 'toggle',
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

export const blogPostQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      ...TinaRemark
      frontmatter {
        title
        path
        description
        keywords {
          label
        }
        date
        location {
          address
          lat
          lng
        }
        map
        zoom
        share
        formattedDate: date(formatString: "DD/MM/YYYY HH:mm")
        ownHero
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
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
    site: settingsJson(fileRelativePath: { regex: "/site/" }) {
      siteUrl
      blogPrefix
    }
  }
`;
