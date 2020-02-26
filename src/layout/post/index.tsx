import React from 'react';

import Seo from '@components/seo';
import Hero from '@layout/hero';
import { Theme } from '@typings/theme';
import { Post } from '@typings/post';
import { Wrapper, Main } from '../styled';

interface PageLayoutProps {
  post: Post;
  hero: Theme['hero'];
}

const BlogPostLayout: React.FC<PageLayoutProps> = ({ children, post, hero }) => {
  return (
    <>
      <Seo
        description={post.frontmatter.description !== '' ? post.frontmatter.description : undefined}
        keywords={post.frontmatter.keywords.length ? post.frontmatter.keywords : undefined}
        shareThumb={post.frontmatter.image?.childImageSharp.fluid.src || hero.image?.childImageSharp.fluid.src}
        shareUrl={post.frontmatter.path}
        title={post.frontmatter.title !== '' ? post.frontmatter.title : undefined}
        shareLabel={post.frontmatter.title !== '' ? post.frontmatter.title : undefined}
      />
      {(post.frontmatter.ownHero || hero.display) && (
        <Hero
          hero={{
            ...hero,
            image: post.frontmatter.ownHero ? post.frontmatter.image : hero.image,
            headline: post.frontmatter.title,
            textline: `à ${post.frontmatter.city} - ${post.frontmatter.place} le ${post.frontmatter.formattedDate}`,
          }}
        />
      )}
      <Main id="main" style={{ flexDirection: 'column', display: 'flex', alignItems: 'stretch' }}>
        <Wrapper>{children}</Wrapper>
      </Main>
    </>
  );
};

export default BlogPostLayout;
