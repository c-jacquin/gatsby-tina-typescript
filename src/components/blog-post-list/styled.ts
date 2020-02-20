/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

export const BlogItemTitle = styled.h1({
  fontSize: '1.3em',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const BlogItemThumb = styled.img({
  width: '20%',
});

export const BlogItemBody = styled.div({
  width: '80%',
  padding: '0 1em',
  fontSize: '0.8em',
  textAlign: 'center',
  alignSelf: 'center',
});

export const BlogItemLabel = styled.span({
  fontWeight: 'normal',
});

export const BlogItemDate = styled.time(() => ({
  fontWeight: 'lighter',
  display: 'inline-block',
  width: '100%',
  textAlign: 'right',
}));

export const List = styled.section(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const ListItem = styled.article(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  '&:hover': {
    background: theme.colors.gray.calm,
  },
  [`@media(min-width: ${theme.dimensions.breakpoints.xl}px)`]: {
    padding: `0 ${theme.dimensions.containerPadding}`,
  },
}));
