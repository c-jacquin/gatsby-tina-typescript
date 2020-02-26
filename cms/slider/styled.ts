import styled from '@emotion/styled';

const RangeInput = styled.input`
  width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &:focus {
    outline: none;
  }
`;

export default RangeInput;
