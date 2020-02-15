import React, { useCallback, ChangeEvent } from 'react';

import { FieldProps } from '../type';

const Select: React.FC<FieldProps> = ({ input, field, meta }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      input.onChange(event.target.value);
    },
    [input],
  );

  return (
    <div>
      <label htmlFor={input.name}>{field.label || field.name}</label>
      <div>{field.description}</div>
      <select {...input} onChange={handleChange}>
        {!!field.options &&
          field.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <div className="field-error">{meta.error}</div>
    </div>
  );
};

export default Select;
