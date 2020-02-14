/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { transparentize } from 'polished';

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

export const HeaderContainer = styled.header`
  height: ${({ theme }: any) => theme.dimensions.heights.header}px;
  padding: 0 ${({ theme }: any) => theme.dimensions.containerPadding};
  background-color: ${({ color }: any) => color};
  display: flex;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 20px;
`;

export const NavigationLink = styled(Link)<{ activeColor?: string; color?: string }>`
  color: ${({ color, theme }: any) => transparentize(0.5, color || theme.colors.white)};
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
    background-color: ${({ activeColor }: any) => (activeColor ? transparentize(0.9, activeColor) : 'inherit')};
  }

  &[aria-current='page'] {
    background-color: ${({ activeColor }: any) => (activeColor ? transparentize(0.7, activeColor) : 'inherit')};
  }
`;

export const HeaderLogo = styled.img`
  height: ${({ theme }: any) => theme.dimensions.heights.header}px;
`;
