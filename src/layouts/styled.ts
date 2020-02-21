/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { transparentize } from 'polished';
import Burger from '@animated-burgers/burger-squeeze';

import { SCROLL_DIRECTION } from '../hooks/useScroll';
import { Theme } from '../styles/theme';

/* === Layout === */

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main(({ theme }: any) => ({
  position: 'relative',
  // marginBottom: '3rem',
  marginTop: theme.dimensions.heights.headerMobile,
  zIndex: 10,
  marginBottom: '300px',
  backgroundColor: theme.colors.ui.light,
  minHeight: '100vh',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    marginTop: theme.dimensions.heights.header,
  },
}));

/* === Header === */

function getHeaderTransform(isTop: boolean, scrollDirection: SCROLL_DIRECTION | null, theme: Theme) {
  if (isTop) {
    return '';
  }
  switch (scrollDirection) {
    case SCROLL_DIRECTION.DOWN:
      return `translateY(-${theme.dimensions.heights.header}px)`;
    default:
      return '';
  }
}

export const HeaderContainer = styled.header<{ isTop: boolean; scrollDirection?: SCROLL_DIRECTION | null }>(
  ({ theme, color, isTop, scrollDirection }: any): any => ({
    padding: `0 ${theme.dimensions.containerPadding}`,
    backgroundColor: color,
    height: `${theme.dimensions.heights.headerMobile}px`,
    transition: 'transform 0.3s linear',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 11,
    transform: getHeaderTransform(isTop, scrollDirection, theme),
    [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
      height: `${theme.dimensions.heights.header}px`,
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

export const HeaderLogo = styled.img(({ theme }: any) => ({
  display: 'none',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'inline-block',
    height: `${theme.dimensions.heights.header}px`,
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

/* === Side menu === */

export const SideMenuContainer = styled.aside(({ theme }: any) => ({
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'none',
  },
}));

export const LogoWrapper = styled.div(({ theme }: any) => ({
  backgroundColor: theme.colors.white,
  textAlign: 'center',
  ' img': {
    display: 'inline',
  },
}));

// Footer

export const FooterContainer = styled.footer(({ theme }: any) => ({
  backgroundColor: '#000',
  height: '300px',
  position: 'fixed',
  zIndex: 1,
  bottom: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    padding: '60px',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
