import { format } from 'date-fns';
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

import { BlogItemThumb, BlogItemBody, BlogItemTitle, BlogItemLabel, BlogItemDate, ListItem, List } from './styled';
import { ActionEdges } from '../../types';

const BlogPostList: React.FC = () => {
  const { posts } = useStaticQuery<ActionEdges>(graphql`
    query BlogPostList {
      posts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }, limit: 10) {
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
    <List>
      {posts?.edges.map(({ node: { frontmatter: { image, title, city, place, date, path } } }) => (
        <Link to={path}>
          <ListItem>
            <BlogItemThumb src={image?.childImageSharp.fluid.src} />
            <BlogItemBody>
              <BlogItemTitle>{title}</BlogItemTitle>
              <div>
                <BlogItemLabel>{city}</BlogItemLabel>
                {' - '}
                <BlogItemLabel>{place}</BlogItemLabel>
              </div>
              <BlogItemDate dateTime={date}>{format(new Date(date), 'dd/MM/yyyy')}</BlogItemDate>
            </BlogItemBody>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default BlogPostList;
