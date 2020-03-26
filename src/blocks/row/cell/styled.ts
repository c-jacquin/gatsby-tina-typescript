import styled from '@emotion/styled';

import { Container } from '@typings/page';

export const CellContainer = styled.div<Container>(
  ({
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    backgroundColor,
    flex,
    flexJustify,
  }) => ({
    marginTop: `${marginTop}em`,
    marginRight: `${marginRight}em`,
    marginLeft: `${marginLeft}em`,
    marginBottom: `${marginBottom}em`,
    paddingTop: `${paddingTop}em`,
    paddingRight: `${paddingRight}em`,
    paddingLeft: `${paddingLeft}em`,
    paddingBottom: `${paddingBottom}em`,
    backgroundColor,
    flex,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: flexJustify,
  }),
);
