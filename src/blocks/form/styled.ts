import styled from '@emotion/styled';

export const FormContainer = styled.form({
  display: 'flex',
  flexDirection: 'column',
});

export const FieldWrapper = styled.div({
  marginBottom: '30px',
});

export const ErrorLabel = styled.span(({ theme }: any) => ({
  color: theme.colors.warning,
}));

export const SuccessLabel = styled.span(({ theme }: any) => ({
  color: theme.colors.success,
}));
