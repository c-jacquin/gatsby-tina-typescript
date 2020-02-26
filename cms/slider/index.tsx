import React, { useCallback, ChangeEvent } from 'react';

import { FieldProps } from '../type';
import { RangeInput, RangeWrapper } from './styled';

const Slider: React.FC<FieldProps> = ({ input, field, meta }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      input.onChange(parseFloat(event.target.value));
    },
    [input],
  );

  return (
    <div>
      <label htmlFor={input.name}>{field.label || field.name}</label>
      <div>{field.description}</div>
      <RangeWrapper>
        <RangeInput {...input} min={field.min} max={field.max} step={field.step} type="range" onChange={handleChange} />
        <span>{input.value}</span>
      </RangeWrapper>
      <div className="field-error">{meta.error}</div>
    </div>
  );
};

export default Slider;
