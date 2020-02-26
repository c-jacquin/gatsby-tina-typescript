import styled from '@emotion/styled';
import { transparentize } from 'polished';
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import { TitleTag } from '@typings/form';

export const StyledParalaxBanner = styled(ParallaxBanner)<{ height: string }>(({ height }) => ({
  height: `${height} !important`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const BannerTitle: React.FC<{ color: string; tag: TitleTag; opacity: number }> = ({ color, tag = 'h2', opacity, children }) => {
  const Title = styled[tag](({ theme }: any) => ({
    color,
    backgroundColor: transparentize(opacity, theme.colors.gray.calm),
    position: 'relative',
    padding: '0.6em 0',
    width: '100%',
    textAlign: 'center',
  }));

  return <Title>{children}</Title>;
};
