import styled from '@emotion/styled';
import { transparentize } from 'polished';
import BackgroundImage from 'gatsby-background-image';
import { ParallaxBanner } from 'react-scroll-parallax';

export const HeroWrapper = styled(ParallaxBanner)<{ large?: boolean }>(({ theme, large }: any) => ({
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

export const HeroBackground = styled.div(({ theme }: any) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: '-8rem',
  zIndex: -1,
  backgroundColor: transparentize(0.1, theme.colors.white),
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: 0,
  transformStyle: 'preserve-3d',
  transform: 'translateZ(-1px) scale(2) translateY(25%)',
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

export const Actions = styled.div(() => ({
  paddingBottom: '0.5rem',
  '> *': {
    marginRight: '1rem',
  },
}));

export const HeroImage = styled(BackgroundImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div<{ lvl?: number }>(({ theme, lvl }: any) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.black,
  opacity: lvl || theme.hero.opacity,
}));
