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
  console.log('row cols =>', cols);
  return (
    <RowContainer {...style}>
      {cols.map(({ vmargin, hmargin, vpadding, hpadding, flex, ...props }: any) => (
        <ColContainer hmargin={hmargin} vmargin={vmargin} vpadding={vpadding} hpadding={hpadding} flex={flex}>
          {console.log(hpadding, vpadding)}
          <Col {...props} files={files} />
        </ColContainer>
      ))}
    </RowContainer>
  );
};

export default Row;
