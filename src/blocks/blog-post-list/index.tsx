import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

import { PostEdges } from '@typings/post';
import { BlogItemThumb, BlogItemBody, BlogItemTitle, BlogItemLabel, BlogItemDate, ListItem, List } from './styled';

interface BlogPostListProps {
  limit?: number;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ limit }) => {
  const { posts } = useStaticQuery<PostEdges>(graphql`
    query BlogPostList {
      posts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              city
              place
              date
              formattedDate: date(formatString: "DD/MM/YYY HH:mm")
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
    <List>
      {posts?.edges
        .slice(0, limit || posts?.edges.length)
        .map(({ node: { frontmatter: { image, title, city, place, date, path, formattedDate } } }) => (
          <Link to={path} key={title}>
            <ListItem>
              <BlogItemThumb src={image?.childImageSharp.fluid.src} />
              <BlogItemBody>
                <BlogItemTitle>{title}</BlogItemTitle>
                <div>
                  <BlogItemLabel>{city}</BlogItemLabel>
                  {' - '}
                  <BlogItemLabel>{place}</BlogItemLabel>
                </div>
                <BlogItemDate dateTime={date}>{formattedDate}</BlogItemDate>
              </BlogItemBody>
            </ListItem>
          </Link>
        ))}
    </List>
  );
};

export default BlogPostList;

export const BlogPostListBlock = {
  label: 'Blog post list',
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

export const BlogPostListFragment = graphql`
  fragment BlogPostListBlock on PagesJsonSections {
    limit
  }
`;

export const BlogPostListColsFragment = graphql`
  fragment BlogPostListColsBlock on PagesJsonSectionsCols {
    limit
  }
`;

export const BlogPostListAsideFragment = graphql`
  fragment BlogPostListAsideBlock on PagesJsonAside {
    limit
  }
`;
