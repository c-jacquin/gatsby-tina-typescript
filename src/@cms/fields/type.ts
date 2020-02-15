export interface FieldProps {
  input: {
    name: string;
    value: string;
    onChange: (value: string) => void;
  };
  meta: {
    error?: string;
  };
  field: {
    label: string;
    description: string;
    name: string;
    min?: number;
    max?: number;
    step?: number;
    options?: { value: string; label: string }[];
  };
}
