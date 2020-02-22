import React from 'react';

import Col from './col';
import { RowContainer, ColContainer } from './styled';

interface RowProps {
  cols: any[];
  files: any;
  vmargin: number;
  hmargin: number;
  vpadding: number;
  hpadding: number;
  flexReverse: string;
  flexAlign: string;
}

const Row: React.FC<RowProps> = ({ files, cols, ...style }) => {
  console.log('row props =>', style);
  return (
    <RowContainer {...style}>
      {cols.map(({ vmargin, hmargin, vpadding, hpadding, width, ...props }: any) => (
        <ColContainer hmargin={hmargin} vmargin={vmargin} vpadding={vpadding} hpadding={hpadding} width={width}>
          <Col {...props} files={files} />
        </ColContainer>
      ))}
    </RowContainer>
  );
};

export default Row;
