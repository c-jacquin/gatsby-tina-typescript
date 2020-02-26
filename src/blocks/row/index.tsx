import { graphql } from 'gatsby';
import React from 'react';

import { BannerBlock } from '@blocks/banner';
import { containerForm } from '@blocks/common';
import { FormBlock } from '@blocks/form';
import { ImageBlock } from '@blocks/image';
import { MapBlock } from '@blocks/map';
import { ContentBlock } from '@blocks/md-content';
import { NewsletterBlock } from '@blocks/newsletter';
import { TitleBlock } from '@blocks/title';
import { Page } from '@typings/json';
import Col from './col';
import { RowContainer, ColContainer } from './styled';

interface RowProps {
  cols: Page['sections'][0]['cols'];
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
        <ColContainer hmargin={props.hmargin} vmargin={props.vmargin} vpadding={props.vpadding} hpadding={props.hpadding} flex={props.flex}>
          <Col {...props} />
        </ColContainer>
      ))}
    </RowContainer>
  );
};

export default Row;

const colFields = [
  {
    label: 'flex',
    name: 'flex',
    component: 'slider',
    min: 1,
    max: 10,
    step: 1,
  },
  ...containerForm,
];

const makeColBlock = (block: any) => {
  return {
    ...block,
    fields: [...colFields, ...block.fields],
    defaultItem: {
      ...block.defaultItem,
      flex: 1,
      hmargin: 0,
      vmargin: 0,
      hpadding: 0,
      vpadding: 0,
    },
  };
};

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
