import React, { forwardRef } from 'react';

import { InputContainer, IconWrapper, InputLabel, InputWrapper, Line, NativeInput } from './styled';

interface InputProps {
  name: string;
  type: string;
  icon?: React.ComponentType;
  label?: string;
  required?: boolean;
  placeholder?: string;
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, label, hasError, ...props }, ref) => (
  <InputContainer>
    {label && <InputLabel hasError={hasError}>{label}</InputLabel>}
    <InputWrapper hasLabel={!!label}>
      <NativeInput {...props} ref={ref} />
      <Line className="line" hasError={hasError} />
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </InputWrapper>
  </InputContainer>
));

export default Input;
