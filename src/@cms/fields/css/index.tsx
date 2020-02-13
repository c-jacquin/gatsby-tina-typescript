import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import { FieldProps } from '../type';

const CssField: React.FC<FieldProps> = ({ input, field, meta }) => {
  return (
    <div>
      <label htmlFor={input.name}>{field.label || field.name}</label>
      <div>{field.description}</div>
      <MonacoEditor
        width="800"
        height="600"
        language="css"
        // theme="vs-dark"
        value={input.value}
        // options={options}
        onChange={input.onChange}
      />
      <div className="field-error">{meta.error}</div>
    </div>
  );
};

export default CssField;
