import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { ActionEdges } from '../../types';
import Card from '../card';
import { PostGridContainer } from './styled';

interface BlogPostGridProps {
  count?: number;
}

const BlogPostGrid: React.FC<BlogPostGridProps> = () => {
  const { posts } = useStaticQuery<ActionEdges>(graphql`
    query BlogPostGrid {
      posts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
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
      {posts?.edges?.map(({ node: { frontmatter: { title, image, path }, excerpt } }: any) => (
        <Card key={title} content={excerpt} image={image?.childImageSharp.fluid.src} title={title} path={path} />
      ))}
    </PostGridContainer>
  );
};

export default BlogPostGrid;
