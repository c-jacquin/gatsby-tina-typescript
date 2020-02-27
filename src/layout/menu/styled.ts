import styled from '@emotion/styled';

export const SideMenuContainer = styled.aside(({ theme }: any) => ({
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'none',
  },
}));

export const LogoWrapper = styled.div(() => ({
  width: '100%',
  height: '100px',
  textAlign: 'center',
}));
