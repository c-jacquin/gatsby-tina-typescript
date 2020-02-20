/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

import Input from '../input';

export const NewsletterFormContainer = styled.form(({ theme }: any) => ({
  margin: `${theme.dimensions.containerPadding} 0`,
  [`@media(min-width: ${theme.dimensions.breakpoints.xl}px)`]: {
    padding: theme.dimensions.containerPadding,
  },
}));

export const NewsletterInput = styled(Input)({
  width: '80%',
});

export const NewsletterLabel = styled.label({
  textAlign: 'center',
  display: 'inline-block',
  width: '100%',
});

export const ErrorLabel = styled.span({
  color: 'red',
});

export const NewsletterInputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});
