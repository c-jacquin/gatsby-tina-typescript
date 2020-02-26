import React from 'react';

import Seo from '@components/seo';
import Hero from '@layout/hero';
import Footer from '@layout/footer';
import { Page } from '@typings/json';
import { Main } from '../styled';

interface PageLayoutProps {
  page: Page;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, page }) => {
  return (
    <>
      <Seo
        description={page.seo.description !== '' ? page.seo.description : undefined}
        keywords={page.seo.keywords.length ? page.seo.keywords : undefined}
        shareThumb={page.seo.social.image?.childImageSharp.fluid.src || page.hero.image?.childImageSharp.fluid.src}
        shareUrl={page.path}
        title={page.seo.title !== '' ? page.seo.title : undefined}
        shareLabel={page.seo.social.title !== '' ? page.seo.social.title : undefined}
      />
      {page.hero.display && <Hero hero={page.hero} />}
      <Main id="main">{children}</Main>
      {page.hasFooter && <Footer />}
    </>
  );
};

export default PageLayout;
