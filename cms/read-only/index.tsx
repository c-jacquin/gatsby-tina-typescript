import React from 'react';

import { FieldProps } from '../type';
import { ReadOnlyLabel } from './styled';

const ReadOnly: React.FC<FieldProps> = ({ input, field }) => {
  return (
    <div>
      <label htmlFor={input.name}>{field.label || field.name}</label>
      <div>{field.description}</div>
      <ReadOnlyLabel>{input.value}</ReadOnlyLabel>
    </div>
  );
};

export default ReadOnly;
