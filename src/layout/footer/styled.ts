import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const FooterContainer = styled.footer(({ theme }: any) => ({
  backgroundColor: theme.colors.black,
  height: `${theme.footer.height}px`,
  width: '100%',
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.colors.white,
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    padding: '20px',
  },
}));

export const FooterNavbar = styled.nav({
  margin: '20px 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const FooterNavlink = styled(Link)(({ theme }: any) => ({
  color: theme.colors.white,
  marginRight: '10px',

  '&:visited': {
    color: theme.colors.white,
  },
  '&:active': {
    color: theme.colors.white,
  },
  '&:hover': {
    color: theme.colors.white,
  },
}));
