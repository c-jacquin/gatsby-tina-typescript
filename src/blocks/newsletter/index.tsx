import { graphql } from 'gatsby';
import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';

import { ContactFormvalues } from '@typings/form';
import Spinner from '@components/spinner';
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

export const NewsletterBlock = {
  label: 'Newsletter widget',
  fields: [
    {
      label: 'Forms endpoint',
      name: 'apiUrl',
      description: 'The endpoints used by newsletter form and contact forms (!!!)',
      component: 'text',
    },
    {
      label: 'Newsletter form label',
      name: 'title',
      description: 'The label on top of your newsletter form',
      component: 'text',
    },
    {
      label: 'Newsletter email error label',
      name: 'fieldErrorMessage',
      description: 'The error message displayed when email is invalid',
      component: 'text',
    },
    {
      label: 'Newsletter form error label',
      name: 'errorMessage',
      description: 'The error message when something fail on submit',
      component: 'text',
    },
    {
      label: 'Newsletter form success label',
      name: 'successMessage',
      description: 'The message displayed when the form submitted successfully',
      component: 'text',
    },
  ],
  defaultItem: {
    apiUrl: '',
    title: 'Newsletter',
    fieldErrorMessage: 'invalid email',
    errorMessage: 'something fail',
    successMessage: 'thank you !',
  },
};

export const NewsletterFragment = graphql`
  fragment NewsletterBlock on PagesJsonSections {
    apiUrl
    title
    fieldErrorMessage
    errorMessage
    successMessage
  }
`;

export const NewsletterColsFragment = graphql`
  fragment NewsletterColsBlock on PagesJsonSectionsCols {
    apiUrl
    title
    fieldErrorMessage
    errorMessage
    successMessage
  }
`;
export const NewsletterAsideFragment = graphql`
  fragment NewsletterAsideBlock on PagesJsonAside {
    apiUrl
    title
    fieldErrorMessage
    errorMessage
    successMessage
  }
`;
