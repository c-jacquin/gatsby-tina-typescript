import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';

import { ContactFormvalues } from '../../types';
import Spinner from '../spinner';
import { NewsletterFormContainer, NewsletterLabel, ErrorLabel, NewsletterInput, NewsletterInputWrapper, SubmitButton } from './styled';

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface NewsletterFormProps {
  apiUrl: string;
  title: string;
  fieldErrorMessage: string;
  errorMessage: string;
  successMessage: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ apiUrl, title, errorMessage, fieldErrorMessage, successMessage }) => {
  const [hasServerError, setHasServerError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState();
  const { register, handleSubmit, errors, reset } = useForm();

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
    [apiUrl, errorMessage, reset, successMessage],
  );

  return (
    <NewsletterFormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <NewsletterLabel>{title}</NewsletterLabel>
      <NewsletterInputWrapper>
        <NewsletterInput placeholder="Votre email" name="email" type="email" ref={register({ pattern: emailPattern, required: true })} />
        <SubmitButton disabled={isPending || !!errors.email} type="submit" styleType={errors.email ? 'warning' : 'primary'}>
          {isPending ? <Spinner /> : <FaPaperPlane />}
        </SubmitButton>
      </NewsletterInputWrapper>
      {errors.email && <ErrorLabel>{fieldErrorMessage}</ErrorLabel>}
      {hasServerError && message && <ErrorLabel>{message}</ErrorLabel>}
      {!hasServerError && message && <NewsletterLabel>{message}</NewsletterLabel>}
    </NewsletterFormContainer>
  );
};

export default NewsletterForm;
