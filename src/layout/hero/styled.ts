import styled from '@emotion/styled';

import { ParallaxBanner } from 'react-scroll-parallax';

export const HeroWrapper = styled(ParallaxBanner)(({ theme }: any) => ({
  position: 'relative',
  flex: '0 0 auto',
  top: 0,
  paddingTop: `${theme.header.height}px`,
  minHeight: `calc(${theme.header.height} + ${theme.header.height})`,
  height: 'auto !important',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    paddingTop: `${theme.header.heightLg}px`,
    minHeight: `calc(${theme.header.heightLg} + ${theme.header.heightLg})`,
  },
}));

export const HeroContent = styled.div<{ large?: boolean }>(({ large }) => ({
  display: 'block',
  padding: large ? '8rem 0' : '3rem 0',
}));

export const Headline = styled.h1(({ theme }: any) => ({
  fontSize: '2.6em',
  lineHeight: 1.2,
  color: theme.colors.white,
  wordSpacing: '1px',
  fontWeight: 700,
  textTransform: 'none',
}));

export const Textline = styled.p(({ theme }: any) => ({
  fontSize: '1.3rem',
  lineHeight: 1.2,
  color: theme.colors.secondary,
  wordSpacing: '1px',
  fontWeight: 500,
  textTransform: 'none',
  paddingBottom: '0.3rem',
}));

export const Overlay = styled.div<{ lvl?: number }>(({ theme, lvl }: any) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.black,
  opacity: lvl || theme.hero.opacity,
}));
