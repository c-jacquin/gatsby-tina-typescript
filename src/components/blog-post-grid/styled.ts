import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const PostGridContainer = styled.section(({ theme }: any) => ({
  display: 'grid',
  gridGap: '1rem',
  padding: '1rem',
  margin: '0 auto',

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.xl}px)`]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
}));
