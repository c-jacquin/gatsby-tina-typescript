import styled from '@emotion/styled';

export const Root = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Main = styled.main(({ theme }: any) => ({
  position: 'relative',
  marginBottom: `${theme.footer.height}px`,
  marginTop: theme.header.height,
  zIndex: 10,
  backgroundColor: theme.colors.ui.light,
  minHeight: '100vh',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    marginTop: theme.header.heightLg,
  },
}));

export const Wrapper = styled.div(({ theme }: any) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '896px',
  margin: '0 auto',
  padding: '0 1rem',

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    padding: '0 2rem',
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    maxWidth: '1024px',
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.xl}px)`]: {
    maxWidth: '1280px',
  },
}));
