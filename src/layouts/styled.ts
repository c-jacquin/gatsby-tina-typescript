import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { transparentize } from 'polished';

import { heights, dimensions, colors } from '../styles/theme';

/* === Layout === */

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
`;

/* === Header === */

export const HeaderContainer = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
