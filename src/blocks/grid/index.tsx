import React from 'react';
import { graphql } from 'gatsby';

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
import { GridWrapper, GridWrapperProps } from './styled';

interface GridProps extends GridWrapperProps {
  cols: ColProps[];
}

const Grid: React.FC<GridProps> = ({ cols, ...style }) => (
  <GridWrapper {...style}>
    {cols.map(props => (
      <Col {...props} />
    ))}
  </GridWrapper>
);

export default Grid;

export const GridBlock = {
  label: 'Grid',
  fields: [
    ...containerForm,
    {
      label: 'column on huge device',
      name: 'xlCol',
      component: 'slider',
      step: 1,
      min: 1,
      max: 50,
    },
    {
      label: 'column on large device',
      name: 'lgCol',
      component: 'slider',
      step: 1,
      min: 1,
      max: 50,
    },
    {
      label: 'column on medium device',
      name: 'mdCol',
      component: 'slider',
      step: 1,
      min: 1,
      max: 50,
    },
    {
      label: 'column on small device',
      name: 'smCol',
      component: 'slider',
      step: 1,
      min: 1,
      max: 50,
    },
    {
      label: 'size of the gutter',
      name: 'gutter',
      component: 'slider',
      step: 0.1,
      min: 0,
      max: 10,
    },
    {
      label: 'blocks',
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
    xlCol: 4,
    lgCol: 3,
    mdCol: 2,
    smCol: 1,
    gutter: 0.5,
    cols: [],
  },
};

export const gridFragment = graphql`
  fragment GridBlock on PagesJsonSections {
    xlCol
    lgCol
    mdCol
    smCol
    gutter
    ...ColsBlock
  }
`;
