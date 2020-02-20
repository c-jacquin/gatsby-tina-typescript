/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useCallback } from 'react';

export interface ContactFormvalues {
  email: string;
  name: string;
  message: string;
  isNewletter: boolean;
}

const initialState = {
  isPending: false,
  submitForm: (data: Partial<ContactFormvalues>) => Promise.resolve(),
};

const FormContext = createContext<typeof initialState>(initialState);

const FormProvider: React.FC<{ apiUrl: string }> = ({ children, apiUrl }) => {
  const [isPending, setIsPending] = useState(false);
  const submitForm = useCallback<(data: Partial<ContactFormvalues>) => Promise<void>>(
    async data => {
      setIsPending(true);

      const body = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        body.append(key, value as string);
      });

      const res = await fetch(apiUrl, {
        method: 'POST',
        body,
        headers: {
          Accept: 'application/json',
        },
      });

      setIsPending(false);

      if (!res.ok) {
        throw new Error('unable to reach the api');
      }
    },
    [apiUrl],
  );

  return (
    <FormContext.Provider
      value={{
        isPending,
        submitForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
