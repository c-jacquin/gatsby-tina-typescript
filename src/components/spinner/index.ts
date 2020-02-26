import styled from '@emotion/styled';
import { FaSpinner } from 'react-icons/fa';

import { spin } from '@styles/keyframes';

const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;
