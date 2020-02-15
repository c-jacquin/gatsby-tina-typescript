/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { transparentize } from 'polished';
import Burger from '@animated-burgers/burger-squeeze';

/* === Layout === */

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  position: relative;
  margin-bottom: 3rem;
`;

/* === Header === */

export const HeaderContainer = styled.header(({ theme, color }: any) => ({
  padding: `0 ${theme.dimensions.containerPadding}`,
  backgroundColor: color,
  height: '45px',
  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    height: `${theme.dimensions.heights.header}px`,
    display: 'flex',
  },
}));

export const Navbar = styled.nav(({ theme }: any) => ({
  display: 'none',
  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
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
  marginLeft: '20px',
  color: transparentize(0.5, color || theme.colors.white),
  fontWeight: 600,
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    height: '100%',
    marginLeft: 0,
    width: 'auto',
  },

  '&:hover, &:focus': {
    textDecoration: 'none',
    backgroundColor: activeColor ? transparentize(0.9, activeColor) : 'inherit',
  },

  '&[aria-current="page"': {
    backgroundColor: activeColor ? transparentize(0.7, activeColor) : 'inherit',
  },
}));

export const HeaderLogo = styled.img(({ theme }: any) => ({
  display: 'none',
  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    display: 'inline-block',
    height: `${theme.dimensions.heights.header}px`,
  },
}));

export const MenuButton = styled(Burger as any)(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    display: 'none',
  },
}));

/* === Side menu === */

export const SideMenuContainer = styled.aside(({ theme }: any) => ({
  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
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
