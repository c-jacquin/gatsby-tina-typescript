import styled from '@emotion/styled';

export const SocialButtons = styled.div<{ flexAlign: string }>(({ flexAlign }) => ({
  display: 'flex',
  justifyContent: flexAlign,
}));

export const SocialIconButton = styled.a<{ backgroundColor?: string }>(({ backgroundColor }) => ({
  border: 'none',
  backgroundColor,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '40px',
  width: '40px',
  ' svg': {
    fill: 'white',
    alignSelf: 'center',
  },
}));
