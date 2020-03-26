/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';

import { CellProps } from '@typings/page';

import Block from './block';
import { CellContainer } from './styled';

const Cell: React.FC<CellProps> = props => {
  return (
    <CellContainer {...props.container}>
      <Block {...props} />
    </CellContainer>
  );
};

export default Cell;

export const containerFragment = graphql`
  fragment Container on PagesJsonSections {
    container {
      marginTop
      marginRight
      marginBottom
      marginLeft

      paddingTop
      paddingRight
      paddingBottom
      paddingLeft

      flex
      backgroundColor
      flexJustify
    }
  }
`;

export const containerAsideFragment = graphql`
  fragment ContainerAside on PagesJsonAside {
    container {
      marginTop
      marginRight
      marginBottom
      marginLeft

      paddingTop
      paddingRight
      paddingBottom
      paddingLeft

      flex
      backgroundColor
      flexJustify
    }
  }
`;

export const containerColsFragment = graphql`
  fragment ContainerCol on PagesJsonSectionsCols {
    container {
      marginTop
      marginRight
      marginBottom
      marginLeft

      paddingTop
      paddingRight
      paddingBottom
      paddingLeft

      flex
      backgroundColor
      flexJustify
    }
  }
`;

export const containerColsColsFragment = graphql`
  fragment ContainerColCols on PagesJsonSectionsColsCols {
    container {
      marginTop
      marginRight
      marginBottom
      marginLeft

      paddingTop
      paddingRight
      paddingBottom
      paddingLeft

      flex
      backgroundColor
      flexJustify
    }
  }
`;

export const ColFragment = graphql`
  fragment ColsBlock on PagesJsonSections {
    cols {
      _template
      flex
      ...TitleColsBlock
      ...BannerColsBlock
      ...NewsletterColsBlock
      ...FormColsBlock
      ...MapColsBlock
      ...BlogPostListColsBlock
      ...SocialShareColsBlock
      ...ContainerCol
      ...GridColsBlock
    }
  }
`;

export const ColsColFragment = graphql`
  fragment ColsColsBlock on PagesJsonSectionsCols {
    cols {
      _template
      flex
      ...TitleColsColsBlock
      ...BannerColsColsBlock
      ...NewsletterColsColsBlock
      ...FormColsColsBlock
      ...MapColsColsBlock
      ...BlogPostListColsColsBlock
      ...SocialShareColsColsBlock
      ...ContainerColCols
    }
  }
`;
