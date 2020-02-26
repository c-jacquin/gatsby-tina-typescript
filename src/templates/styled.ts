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

export const PostContainer = styled.article<{ isEditing: boolean }>(({ theme, isEditing }: any) => ({
  flexGrow: 0,
  position: 'relative',
  overflowY: isEditing ? 'auto' : 'inherit',
  // eslint-disable-next-line no-nested-ternary
  transform: isEditing ? `translateY(-${theme.hero.display ? (theme.hero.large ? '16rem' : '6rem') : 0})` : 'translateY(0)',
  transition: 'transform 0.3s linear, background-color 0.3s linear',
  height: isEditing ? '50rem' : 'auto',
  backgroundColor: isEditing ? theme.colors.ui.whisper : transparentize(0.1, theme.colors.ui.whisper),
  boxShadow: `0 0.5rem 1rem -0.5rem ${transparentize(0.3, theme.colors.black)}`,
  borderRadius: '3px',
  padding: '2.5rem 2.5rem',
  maxWidth: '896px',
  ' .gatsby-resp-image-wrapper': {
    margin: '2.5rem calc(2.5 * -1) !important',
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.md}px)`]: {
    margin: 0,
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    padding: '3.5rem 4rem',
    maxWidth: '1024px',

    ' .gatsby-resp-image-wrapper': {
      margin: '3.5rem calc(4 * -1) !important',
    },
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.xl}px)`]: {
    maxWidth: '1280px',
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
  position: fixed;
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
