import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { ActionEdges } from '../../types';
import Card from '../card';
import { PostGridContainer } from './styled';

interface BlogPostGridProps {
  limit?: number;
}

const BlogPostGrid: React.FC<BlogPostGridProps> = ({ limit }) => {
  const { posts } = useStaticQuery<ActionEdges>(graphql`
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
      {posts?.edges.slice(0, limit || posts?.edges.length).map(({ node: { frontmatter: { title, image, path }, excerpt } }: any) => (
        <Card key={title} content={excerpt} image={image?.childImageSharp.fluid.src} title={title} path={path} />
      ))}
    </PostGridContainer>
  );
};

export default BlogPostGrid;
