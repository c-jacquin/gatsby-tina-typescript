/* eslint-disable react/destructuring-assignment */
import React from 'react';

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
