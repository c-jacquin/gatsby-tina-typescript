import React from 'react';
import { graphql } from 'gatsby';

import { imageField } from '@blocks/image';
import { Page } from '@typings/page';
import { Wrapper } from '../styled';
import { HeroWrapper, HeroContent, Headline, Textline, Overlay } from './styled';

interface HeroProps {
  hero: Page['hero'];
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <HeroWrapper
      layers={[
        {
          image: hero?.image?.childImageSharp.fluid.src,
          children: hero.overlay && <Overlay lvl={hero.opacity} />,
          amount: hero.parallax,
        },
      ]}
    >
      {(hero.headline || hero.textline) && (
        <HeroContent large={hero.large}>
          <Wrapper>
            {hero.headline && <Headline>{hero.headline}</Headline>}
            {hero.textline && <Textline>{hero.textline}</Textline>}
          </Wrapper>
        </HeroContent>
      )}
    </HeroWrapper>
  );
};

export const heroField = {
  label: 'Hero',
  name: 'rawJson.hero',
  component: 'group',
  fields: [
    {
      label: 'Display',
      name: 'display',
      component: 'toggle',
    },
    {
      label: 'Headline',
      name: 'headline',
      component: 'text',
    },
    {
      label: 'Textline',
      name: 'textline',
      component: 'text',
    },
    {
      ...imageField,
      label: 'Image',
      name: 'image',
      component: 'image',
    },
    {
      label: 'Large',
      name: 'large',
      component: 'toggle',
    },
    {
      label: 'Overlay',
      name: 'overlay',
      component: 'toggle',
    },
    {
      label: 'Overlay opacity',
      name: 'opacity',
      component: 'slider',
      step: 0.1,
      min: 0,
      max: 1,
    },
    {
      label: 'Parallax offset',
      name: 'parallax',
      component: 'slider',
      step: 0.1,
      min: -1,
      max: 1,
    },
  ],
};

export const heroFragment = graphql`
  fragment HeroBlock on PagesJson {
    hero {
      headline
      textline
      large
      display
      overlay
      opacity
      parallax
      image {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export const heroThemeFragment = graphql`
  fragment HeroThemeBlock on SettingsJson {
    hero {
      headline
      textline
      large
      display
      overlay
      opacity
      parallax
      image {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default Hero;
