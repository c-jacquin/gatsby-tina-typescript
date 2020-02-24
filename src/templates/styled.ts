/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { transparentize } from 'polished';

export const PostBody = styled.div({});

export const PostTitle = styled.h1({
  textAlign: 'center',
});

export const PostImage = styled.img(({ theme }: any) => ({
  width: '100%',
  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    height: '300px',
    margin: 'auto auto',
    display: 'block',
  },
}));

export const PostContainer = styled.article(({ theme }: any) => ({
  position: 'relative',
  backgroundColor: theme.colors.ui.calm,
  boxShadow: `0 0.5rem 1rem -0.5rem ${transparentize(0.9, theme.colors.black)}`,
  borderRadius: '10%',
  padding: '0, 0',

  flexGrow: 0,

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    padding: '3.5rem 2.5rem',
  },
}));

export const EditButton = styled.button<{ isEditing: any }>`
  outline: none;
  border: none;
  display: inline-block;
  line-height: 1;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.5rem 0.75rem;
  border-radius: 10% 0 10% 0;
  color: ${(props: any) => props.theme.colors.white};
  background: ${(props: any) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Col2Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    flexDirection: 'row',
  },
}));

export const Col2Main = styled.section(({ theme }: any) => ({
  width: '100%',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: '80%',
  },
}));

export const Col2Aside = styled.aside(({ theme }: any) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: '20%',
  },
}));
