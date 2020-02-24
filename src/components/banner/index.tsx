/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { BannerTitle } from '../title';
import { StyledParalaxBanner } from './styled';

interface BannerProps {
  image: any;
  height: string;
  parallax?: number;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: string;
  opacity: number;
}

const Banner: React.FC<BannerProps> = ({ children, image, height, parallax, tag, color, opacity, ...props }) => {
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
