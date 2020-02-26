export interface ContactFormvalues {
  email: string;
  name: string;
  message: string;
  isNewletter: boolean;
}

export interface Field {
  name: string;
  type: string;
  required: boolean;
  label: string;
  fieldErrorMessage: string;
}

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
