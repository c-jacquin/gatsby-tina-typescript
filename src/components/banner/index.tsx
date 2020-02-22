/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { getThumbnail } from '../../@cms/helpers/thumbnail';
import { BannerTitle } from '../title';
import { StyledParalaxBanner } from './styled';

interface BannerProps {
  image: string;
  height: string;
  parallax?: number;
  files: any[];
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: string;
  opacity: number;
}

const Banner: React.FC<BannerProps> = ({ children, image, height, parallax, files, tag, color, opacity }) => {
  const thumbnail = getThumbnail(files, image);

  return (
    <StyledParalaxBanner
      height={`${height}px`}
      layers={[
        {
          image: thumbnail,
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
