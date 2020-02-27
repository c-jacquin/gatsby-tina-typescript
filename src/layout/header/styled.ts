import Burger from '@animated-burgers/burger-squeeze';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { transparentize } from 'polished';

import { SCROLL_DIRECTION } from '@hooks/useScroll';
import { Theme } from '@typings/theme';

function getHeaderTransform(isTop: boolean, scrollDirection: SCROLL_DIRECTION | null, theme: Theme) {
  if (isTop) {
    return '';
  }
  switch (scrollDirection) {
    case SCROLL_DIRECTION.DOWN:
      return `translateY(-${theme.header.heightLg}px)`;
    default:
      return '';
  }
}

export const HeaderContainer = styled.header<{ isTop: boolean; scrollDirection?: SCROLL_DIRECTION | null }>(
  ({ theme, isTop, scrollDirection }: any) => ({
    padding: `0 ${theme.dimensions.containerPadding}`,
    backgroundColor: transparentize(theme.header.opacity, theme.header.backgroundColor),
    height: `${theme.header.height}px`,
    transition: 'transform 0.3s linear',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 11,
    transform: getHeaderTransform(isTop, scrollDirection, theme),
    [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
      height: `${theme.header.heightLg}px`,
      display: 'flex',
    },
  }),
);

export const Navbar = styled.nav(({ theme }: any) => ({
  display: 'none',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '20px',
  },
}));

export const NavigationLink = styled(Link)<{ activeColor?: string; color?: string }>(({ theme, activeColor, color }: any) => ({
  width: '100%',
  height: '40px',
  paddingLeft: '20px',
  color: transparentize(0.5, color || theme.colors.white),
  fontWeight: 600,
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    height: '100%',
    marginLeft: 0,
    width: 'auto',
  },

  '&:hover, &:focus': {
    textDecoration: 'none',
    backgroundColor: activeColor ? transparentize(0.9, activeColor) : 'inherit',
  },
}));

export const HeaderLogo = styled(Image)(({ theme }: any) => ({
  display: 'none',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'inline-block',
    height: `${theme.header.heightLg}px`,
    width: `${theme.header.heightLg}px`,
  },
}));

export const MenuButton = styled(Burger as any)(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'none',
  },
}));
