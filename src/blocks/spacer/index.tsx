import React from 'react';
import { graphql } from 'gatsby';

import { SpacerContainer, SpacerLine } from './styled';

interface SpacerProps {
  hasLine: boolean;
  lineColor: string;
  height: number;
}

const Spacer: React.FC<SpacerProps> = props => (
  <SpacerContainer {...props}>
    <SpacerLine {...props} />
  </SpacerContainer>
);

export default Spacer;

export const SpacerBlock = {
  label: 'Spacer',
  fields: [
    {
      label: 'height',
      name: 'height',
      component: 'slider',
      step: 1,
      min: 1,
      max: 400,
    },
    {
      label: 'has line ?',
      name: 'hasLine',
      component: 'toggle',
    },
    {
      label: 'line color',
      name: 'lineColor',
      component: 'color',
    },
  ],
  defaultItem: {
    height: 100,
    hasLine: false,
    color: '#000',
  },
};

export const SpacerFragment = graphql`
  fragment SpacerBlock on PagesJsonSections {
    height
    hasLine
    color
  }
`;

export const SpacerAsideFragment = graphql`
  fragment SpacerAsideBlock on PagesJsonAside {
    height
    hasLine
    color
  }
`;
