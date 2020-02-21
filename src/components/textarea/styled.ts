/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

export const NativeTextarea = styled.textarea(({ theme }: any) => ({
  boxSizing: 'border-box',
  border: 'none',
  borderRadius: '3px',
  resize: 'none',
  fontSize: '20px',
  lineHeight: '24px',
  overflow: 'auto',
  height: '100px',
  padding: '8px',
  boxShadow: '0px 4px 10px -8px black',
  width: '100%',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: '70%',
    height: '300px',
    marginLeft: '10px',
  },
  '&::placeholder': {
    color: 'black',
  },
  '&:focus': {
    outline: 'none',
  },
}));

export const TextareaWrapper = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    flexDirection: 'row',
  },
}));

export const TextareaLabel = styled.label(({ theme }: any) => ({
  width: '100%',
  textAlign: 'left',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: '30%',
    textAlign: 'right',
  },
}));
