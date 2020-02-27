import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Card from '@components/card';
import { PostEdges } from '@typings/post';
import { PostGridContainer } from './styled';

interface BlogPostGridProps {
  limit?: number;
}

const BlogPostGrid: React.FC<BlogPostGridProps> = ({ limit }) => {
  const { posts, site } = useStaticQuery<PostEdges & { site: { blogPrefix: string } }>(graphql`
    query BlogPostGrid {
      site: settingsJson(fileRelativePath: { regex: "/site/" }) {
        blogPrefix
      }
      posts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date
              path
              image {
                childImageSharp {
                  fluid(quality: 70, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  return (
    <PostGridContainer>
      {posts?.edges.slice(0, limit || posts?.edges.length).map(({ node: { frontmatter: { title, image, path }, excerpt } }) => (
        <Card key={title} content={excerpt} image={image?.childImageSharp.fluid.src} title={title} path={site.blogPrefix + path} />
      ))}
    </PostGridContainer>
  );
};

export default BlogPostGrid;

export const BlogPostGridBlock = {
  label: 'Blog post grid',
  fields: [
    {
      label: 'limit',
      name: 'limit',
      component: 'number',
    },
  ],
  defaultItem: {
    limit: 0,
  },
};

export const BlogPostGridFragment = graphql`
  fragment BlogPostGridBlock on PagesJsonSections {
    limit
  }
`;

export const BlogPostGridAsideFragment = graphql`
  fragment BlogPostGridAsideBlock on PagesJsonAside {
    limit
  }
`;
