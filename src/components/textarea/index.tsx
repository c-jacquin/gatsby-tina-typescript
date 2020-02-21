import React, { forwardRef } from 'react';
import { TextareaWrapper, TextareaLabel, NativeTextarea } from './styled';

interface TextareaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, ...props }, ref) => {
  return (
    <TextareaWrapper>
      <TextareaLabel>{label}</TextareaLabel>
      <NativeTextarea {...props} ref={ref} />
    </TextareaWrapper>
  );
});

export default Textarea;
