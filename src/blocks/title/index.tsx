import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { CSSProperties } from 'react';

import { TitleTag } from '@typings/form';

interface PageTitleProps {
  align: CSSProperties['textAlign'];
  color: string;
  backgroundColor: string;
  tag: TitleTag;
}

const PageTitle: React.FC<PageTitleProps> = ({ align, color, tag, backgroundColor, children }) => {
  const Title = styled[tag]({
    color,
    backgroundColor,
    textAlign: align,
    margin: 0,
  });

  return <Title>{children}</Title>;
};

export default PageTitle;

export const TitleBlock = {
  label: 'Title',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'color',
      name: 'color',
      component: 'color',
    },
    {
      label: 'background color',
      name: 'backgroundColor',
      component: 'color',
    },
    {
      label: 'align',
      name: 'align',
      component: 'text',
    },
    {
      label: 'title tag type',
      name: 'tag',
      component: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  ],
  defaultItem: {
    title: 'un titre',
    color: '#000',
    backgroundColor: '#fff',
    align: 'center',
    margin: 2,
    tag: 'h2',
  },
};

export const TitleFragment = graphql`
  fragment TitleBlock on PagesJsonSections {
    title
    color
    backgroundColor
    align
    margin
    tag
  }
`;

export const TitleColsFragment = graphql`
  fragment TitleColsBlock on PagesJsonSectionsCols {
    title
    color
    backgroundColor
    align
    margin
    tag
  }
`;

export const TitleAsideFragment = graphql`
  fragment TitleAsideBlock on PagesJsonAside {
    title
    color
    backgroundColor
    align
    margin
    tag
  }
`;

export const TitleColsColsFragment = graphql`
  fragment TitleColsColsBlock on PagesJsonSectionsColsCols {
    title
    color
    backgroundColor
    align
    margin
    tag
  }
`;
