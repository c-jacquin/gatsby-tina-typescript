import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactFormvalues } from '../../types';
import Input from '../input';
import { FormContainer, Field, ErrorLabel, SuccessLabel } from './styled';
import Button from '../button';
import Spinner from '../spinner';
import Textarea from '../textarea';

interface FormProps {
  fields: any[];
  apiUrl: string;
  submitLabel: string;
  errorMessage: string;
  successMessage: string;
}

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form: React.FC<FormProps> = ({ fields, submitLabel, errorMessage, successMessage, apiUrl }) => {
  const [hasServerError, setHasServerError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = useCallback(
    async (formData: Partial<ContactFormvalues>) => {
      try {
        setHasServerError(false);
        setIsPending(true);

        const body = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          body.append(key, value as string);
        });
        body.append('isNewsletter', 'true');

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

        reset();
        setMessage(successMessage);
      } catch (err) {
        setHasServerError(true);
        setMessage(errorMessage);
      }
    },
    [apiUrl, reset, errorMessage, successMessage],
  );

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      {fields.map(({ type, label, name, /* fieldErrorMessage , */ required }) => {
        switch (type) {
          case 'text':
            return (
              <Field>
                <Input name={name} label={label} type={type} key={name} ref={register({ required })} hasError={!!errors[name]} />
                {/* {errors[name] && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>} */}
              </Field>
            );
          case 'email':
            return (
              <Field>
                <Input
                  name={name}
                  label={label}
                  key={name}
                  type="email"
                  ref={register({ pattern: emailPattern, required })}
                  hasError={!!errors[name]}
                />
                {/* {errors[name] && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>} */}
              </Field>
            );
          case 'textarea':
            return (
              <Field>
                <Textarea name={name} label={label} key={name} ref={register({ required })} />
                {/* {errors[name] && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>} */}
              </Field>
            );
          default:
            return null;
        }
      })}
      {hasServerError && message && <ErrorLabel>{message}</ErrorLabel>}
      {!hasServerError && message && <SuccessLabel>{message}</SuccessLabel>}
      <Button type="submit" styleType="primary">
        {isPending ? <Spinner /> : submitLabel}
      </Button>
    </FormContainer>
  );
};

export default Form;
