/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export type StyleType = 'primary' | 'white' | 'warning' | 'accent';

export const StyledButton = styled.button<{ styleType?: StyleType }>(({ theme, styleType = 'primary' }: any) => ({
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: theme.colors[styleType],
  color: theme.colors.white,
  padding: '5px 0',
}));
