import { graphql } from 'gatsby';
import React from 'react';

import { BannerBlock } from '@blocks/banner';
import Col, { makeColBlock } from '@blocks/col';
import { containerForm } from '@blocks/common';
import { FormBlock } from '@blocks/form';
import { ImageBlock } from '@blocks/image';
import { MapBlock } from '@blocks/map';
import { ContentBlock } from '@blocks/md-content';
import { NewsletterBlock } from '@blocks/newsletter';
import { TitleBlock } from '@blocks/title';
import { Col as ColProps } from '@typings/page';
import { SocialShareBlock } from '@blocks/social-share';
import { RowContainer } from './styled';

interface RowProps {
  cols: ColProps[];
  vmargin: number;
  hmargin: number;
  vpadding: number;
  hpadding: number;
  flexReverse: boolean;
  flexAlign: string;
}

const Row: React.FC<RowProps> = ({ cols, ...style }) => {
  return (
    <RowContainer {...style}>
      {cols.map(props => (
        <Col {...props} />
      ))}
    </RowContainer>
  );
};

export default Row;

export const RowBlock = {
  label: 'row',
  fields: [
    {
      label: 'flex alignment',
      name: 'flexAlign',
      component: 'select',
      options: ['flex-start', 'flex-end', 'space-between', 'space-around'],
    },
    {
      label: 'flex reverse',
      name: 'flexReverse',
      component: 'toggle',
    },
    ...containerForm,
    {
      label: 'columns',
      name: 'cols',
      component: 'blocks',
      templates: {
        ContentBlock: makeColBlock(ContentBlock),
        MapBlock: makeColBlock(MapBlock),
        FormBlock: makeColBlock(FormBlock),
        TitleBlock: makeColBlock(TitleBlock),
        NewsletterBlock: makeColBlock(NewsletterBlock),
        BannerBlock: makeColBlock(BannerBlock),
        ImageBlock: makeColBlock(ImageBlock),
        SocialShareBlock: makeColBlock(SocialShareBlock),
      },
    },
  ],
  defaultItem: {
    flexAlign: 'flex-start',
    flexReverse: false,
    hpadding: 0,
    vpadding: 0,
    hmargin: 0,
    vmargin: 0,
    cols: [],
  },
};

export const RowFragment = graphql`
  fragment RowBlock on PagesJsonSections {
    flexAlign
    flexReverse
    hpadding
    vpadding
    hmargin
    vmargin
    ...ColsBlock
  }
`;
