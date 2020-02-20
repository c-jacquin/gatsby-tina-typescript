import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';

import { FormContext, ContactFormvalues } from '../../context/form';
import Button from '../button';
import Spinner from '../spinner';
import { NewsletterFormContainer, NewsletterLabel, ErrorLabel, NewsletterInput, NewsletterInputWrapper } from './styled';

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface NewsletterFormProps {
  label: string;
  errorLabel: string;
  emailErrorLabel: string;
  successLabel: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ label, errorLabel, emailErrorLabel, successLabel }) => {
  const [hasServerError, setHasServerError] = useState(false);
  const [message, setMessage] = useState();
  const { submitForm, isPending } = useContext(FormContext);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (formData: Partial<ContactFormvalues>) => {
    try {
      setHasServerError(false);
      await submitForm({
        ...formData,
        isNewletter: true,
      });
      reset();
      setMessage(successLabel);
    } catch (err) {
      setHasServerError(true);
      setMessage(errorLabel);
    }
  };

  return (
    <NewsletterFormContainer onSubmit={handleSubmit(onSubmit)}>
      <NewsletterLabel>{label}</NewsletterLabel>
      <NewsletterInputWrapper>
        <NewsletterInput name="email" type="email" placeholder="Votre email" ref={register({ pattern: emailPattern, required: true })} />
        <Button disabled={isPending} type="submit">
          {isPending ? <Spinner /> : <FaPaperPlane />}
        </Button>
      </NewsletterInputWrapper>
      {errors.email && <ErrorLabel>{emailErrorLabel}</ErrorLabel>}
      {hasServerError && message && <ErrorLabel>{message}</ErrorLabel>}
      {!hasServerError && message && <NewsletterLabel>{message}</NewsletterLabel>}
    </NewsletterFormContainer>
  );
};

export default NewsletterForm;
