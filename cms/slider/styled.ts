import styled from '@emotion/styled';

export const RangeInput = styled.input`
  width: 85%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &:focus {
    outline: none;
  }
`;

export const RangeWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});
