import styled from '@emotion/styled';

export interface GridWrapperProps {
  xlCol: number;
  lgCol: number;
  mdCol: number;
  smCol: number;
  gutter: number;
}

export const GridWrapper = styled.section<GridWrapperProps>(({ theme, gutter, lgCol, mdCol, smCol, xlCol }: any) => ({
  display: 'grid',
  gridGap: '1rem',
  padding: '1rem',
  margin: '0 auto',
  gridColumnGap: gutter,
  gridTemplateColumns: `repeat(${smCol}, 1fr)`,

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    gridTemplateColumns: `repeat(${mdCol}, 1fr)`,
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    gridTemplateColumns: `repeat(${lgCol}, 1fr)`,
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.xl}px)`]: {
    gridTemplateColumns: `repeat(${xlCol}, 1fr)`,
  },
}));
