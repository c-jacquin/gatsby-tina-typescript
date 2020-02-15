import styled from '@emotion/styled';

export const IndexContainer = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    flexDirection: 'row',
  },
}));

export const IndexMain = styled.section(({ theme }: any) => ({
  width: '100%',

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    width: '80%',
  },
}));

export const IndexAside = styled.aside(({ theme }: any) => ({
  width: '100%',

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    width: '20%',
  },
}));
