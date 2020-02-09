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
  padding: ${({ theme }: any) => theme.dimensions.containerPadding}rem;
  margin-bottom: 3rem;
`;

/* === Header === */

export const HeaderContainer = styled.header`
  height: ${({ theme }: any) => theme.dimensions.heights.header}px;
  padding: 0 ${({ theme }: any) => theme.dimensions.containerPadding}rem;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const HomepageLink = styled(Link)`
  color: ${({ theme }: any) => transparentize(0.5, theme.colors.white)};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
