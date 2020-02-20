import styled from '@emotion/styled';
import { transparentize } from 'polished';
import React from 'react';

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface PageTitleProps {
  align:
    | 'left'
    | 'right'
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'center'
    | 'end'
    | 'start'
    | 'justify'
    | 'match-parent';
  color: string;
  margin: string;
  tag: TitleTag;
}

export const PageTitle: React.FC<PageTitleProps> = ({ align, color, margin, tag, children }) => {
  const Title = styled[tag]({
    color,
    textAlign: align,
    margin: `${margin}em 0`,
  });

  return <Title>{children}</Title>;
};

export const BannerTitle: React.FC<{ color: string; tag: TitleTag; opacity: number }> = ({ color, tag = 'h2', opacity, children }) => {
  const Title = styled[tag](({ theme }: any) => ({
    color,
    backgroundColor: transparentize(opacity, theme.colors.gray.calm),
    position: 'relative',
    padding: '0.6em 0',
    width: '100%',
    textAlign: 'center',
  }));

  return <Title>{children}</Title>;
};

// export const BannerTitle = styled.h2({});
