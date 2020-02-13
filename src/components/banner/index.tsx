/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import { getThumbnail } from '../../helpers/thumbnail';
import { BannerTitle } from '../title';

interface BannerProps {
  image: string;
  height: string;
  parallax?: number;
  files: any[];
}

const Banner: React.FC<BannerProps> = ({ children, image, height, parallax, files }) => {
  const thumbnail = getThumbnail(files, image);

  return (
    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: thumbnail,
          children: <figure />,
          amount: parallax || 0,
        },
      ]}
      style={{
        height,
        width: '100%',
      }}
    >
      <BannerTitle>{children}</BannerTitle>
    </ParallaxBanner>
  );
};

export default Banner;
