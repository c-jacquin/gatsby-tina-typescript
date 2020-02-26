import { graphql } from 'gatsby';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactFormvalues, Field } from '@typings/form';
import Input from '@components/input';
import Button from '@components/button';
import Spinner from '@components/spinner';
import Textarea from '@components/textarea';

import { FormContainer, FieldWrapper, ErrorLabel, SuccessLabel } from './styled';

interface FormProps {
  fields: Field[];
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
              <FieldWrapper>
                <Input name={name} label={label} type={type} key={name} ref={register({ required })} hasError={!!errors[name]} />
                {/* {errors[name] && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>} */}
              </FieldWrapper>
            );
          case 'email':
            return (
              <FieldWrapper>
                <Input
                  name={name}
                  label={label}
                  key={name}
                  type="email"
                  ref={register({ pattern: emailPattern, required })}
                  hasError={!!errors[name]}
                />
                {/* {errors[name] && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>} */}
              </FieldWrapper>
            );
          case 'textarea':
            return (
              <FieldWrapper>
                <Textarea name={name} label={label} key={name} ref={register({ required })} />
                {/* {errors[name] && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>} */}
              </FieldWrapper>
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

export const FormBlock = {
  label: 'Form',
  fields: [
    {
      label: 'Api url',
      name: 'apiUrl',
      component: 'text',
    },
    {
      label: 'Server error message',
      name: 'errorMessage',
      component: 'text',
    },
    {
      label: 'Label on the submit button',
      name: 'submitLabel',
      component: 'text',
    },
    {
      label: 'Success message',
      name: 'successMessage',
      component: 'text',
    },
    {
      label: 'Form fields',
      name: 'fields',
      description: 'The fields of the form',
      component: 'group-list',
      itemProps: (item: Field, idx: number) => ({
        key: idx,
        ...item,
      }),
      defaultItem: {
        type: 'text',
        name: 'a name',
        label: '',
        errorMessage: 'error',
        required: false,
      },
      fields: [
        {
          label: 'label',
          name: 'label',
          component: 'text',
        },
        {
          label: 'name',
          name: 'name',
          component: 'text',
        },
        {
          label: 'error message',
          name: 'fieldErrorMessage',
          component: 'text',
        },
        {
          label: 'is required',
          name: 'required',
          component: 'toggle',
        },
        {
          label: 'type',
          name: 'type',
          component: 'select',
          options: ['text', 'email', 'textarea'],
        },
      ],
    },
  ],
  defaultItem: {
    errorMessage: 'Something fail :(',
    submitLabel: 'Submit',
    successMessage: 'Success !!!',
    fields: [
      {
        label: 'name',
        type: 'text',
        required: false,
        name: 'name',
        errorMessage: 'error',
      },
    ],
  },
};

export const FormFragment = graphql`
  fragment FormBlock on PagesJsonSections {
    errorMessage
    submitLabel
    successMessage
    fields {
      label
      type
      required
      name
      fieldErrorMessage
    }
  }
`;

export const FormColsFragment = graphql`
  fragment FormColsBlock on PagesJsonSectionsCols {
    errorMessage
    submitLabel
    successMessage
    fields {
      label
      type
      required
      name
      fieldErrorMessage
    }
  }
`;

export const FormAsideFragment = graphql`
  fragment FormAsideBlock on PagesJsonAside {
    errorMessage
    submitLabel
    successMessage
    fields {
      label
      type
      required
      name
      fieldErrorMessage
    }
  }
`;
