import { graphql } from 'gatsby';
import React from 'react';

import { BannerBlock } from '@blocks/banner';
import { FormBlock } from '@blocks/form';
import { ImageBlock } from '@blocks/image';
import { MapBlock } from '@blocks/map';
import { ContentBlock } from '@blocks/md-content';
import { NewsletterBlock } from '@blocks/newsletter';
import { TitleBlock } from '@blocks/title';
import { SocialShareBlock } from '@blocks/social/share';

import { CellProps } from '@typings/page';

import { GridBlock } from '@blocks/grid';
import Cell from './cell';
import { RowContainer } from './styled';
import { containerizeBlock } from './cell/container';

interface RowProps {
  cols: CellProps[];
  flexReverse: boolean;
  flexAlign: string;
}

const Row: React.FC<RowProps> = ({ cols, ...style }) => {
  return (
    <RowContainer {...style}>
      {cols.map(props => (
        <Cell {...props} />
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
    {
      label: 'columns',
      name: 'cols',
      component: 'blocks',
      templates: {
        ContentBlock: containerizeBlock(ContentBlock),
        MapBlock: containerizeBlock(MapBlock),
        FormBlock: containerizeBlock(FormBlock),
        TitleBlock: containerizeBlock(TitleBlock),
        NewsletterBlock: containerizeBlock(NewsletterBlock),
        BannerBlock: containerizeBlock(BannerBlock),
        ImageBlock: containerizeBlock(ImageBlock),
        SocialShareBlock: containerizeBlock(SocialShareBlock),
        GridBlock: containerizeBlock(GridBlock),
      },
    },
  ],
  defaultItem: {
    flexAlign: 'flex-start',
    flexReverse: false,
    cols: [],
  },
};

export const RowFragment = graphql`
  fragment RowBlock on PagesJsonSections {
    flexAlign
    flexReverse
    ...ColsBlock
  }
`;
