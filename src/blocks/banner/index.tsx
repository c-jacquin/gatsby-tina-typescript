import { graphql } from 'gatsby';
import React from 'react';

import { imageField } from '@blocks/image';
import { ImageSharp } from '@typings/image';
import { StyledParalaxBanner, BannerTitle } from './styled';

interface BannerProps {
  image: ImageSharp;
  height: number;
  parallax?: number;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: string;
  opacity: number;
}

const Banner: React.FC<BannerProps> = ({ children, image, height, parallax, tag, color, opacity }) => {
  return (
    <StyledParalaxBanner
      height={`${height}px`}
      layers={[
        {
          image: image?.childImageSharp.fluid.src,
          children: <figure />,
          amount: parallax || 0,
        },
      ]}
    >
      <BannerTitle color={color} tag={tag} opacity={opacity}>
        {children}
      </BannerTitle>
    </StyledParalaxBanner>
  );
};

export default Banner;

export const BannerBlock = {
  label: 'Banner',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'title color',
      name: 'titleColor',
      component: 'color',
    },
    {
      label: 'title tag type',
      name: 'tag',
      component: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    imageField,
    {
      label: 'Height',
      name: 'height',
      component: 'slider',
      min: 1,
      max: 600,
      step: 1,
    },
    {
      label: 'parallax',
      name: 'parallax',
      component: 'slider',
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      label: 'background opacity',
      name: 'opacity',
      component: 'slider',
      min: 0,
      max: 1,
      step: 0.01,
    },
  ],
  defaultItem: {
    tag: 'h2',
    parallax: 0.5,
    opacity: 0,
    height: 200,
    title: 'A Title',
    color: '#000',
  },
};

export const BannerFragment = graphql`
  fragment BannerBlock on PagesJsonSections {
    tag
    parallax
    opacity
    height
    title
    color
  }
`;

export const BannerColsFragment = graphql`
  fragment BannerColsBlock on PagesJsonSectionsCols {
    tag
    parallax
    opacity
    height
    title
    color
  }
`;

export const BannerAsideFragment = graphql`
  fragment BannerAsideBlock on PagesJsonAside {
    tag
    parallax
    opacity
    height
    title
    color
  }
`;
