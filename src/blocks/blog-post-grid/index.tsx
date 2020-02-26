import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Card from '@components/card';
import { PostEdges } from '@typings/post';
import { PostGridContainer } from './styled';

interface BlogPostGridProps {
  limit?: number;
}

const BlogPostGrid: React.FC<BlogPostGridProps> = ({ limit }) => {
  const { posts } = useStaticQuery<PostEdges>(graphql`
    query BlogPostGrid {
      posts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              city
              place
              date
              path
              image {
                childImageSharp {
                  fluid {
                    src
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
        <Card key={title} content={excerpt} image={image?.childImageSharp.fluid.src} title={title} path={path} />
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