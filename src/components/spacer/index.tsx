import React from 'react';
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
