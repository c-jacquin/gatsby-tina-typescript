import React from 'react';

import Col from './col';
import { RowContainer } from './styled';

interface RowProps {
  cols: any[];
  allFile: any;
  vmargin: number;
  hmargin: number;
  vpadding: number;
  hpadding: number;
  flexReverse: string;
  flexAlign: string;
}

const Row: React.FC<RowProps> = ({ allFile, cols, ...style }) => {
  return (
    <RowContainer {...style}>
      {cols.map((props: any) => (
        <Col {...props} allFile={allFile} />
      ))}
    </RowContainer>
  );
};

export default Row;
