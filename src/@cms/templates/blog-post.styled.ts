/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

export const PostContainer = styled.article({});

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
