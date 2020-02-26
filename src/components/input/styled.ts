import styled from '@emotion/styled';

export const InputContainer = styled.div(({ theme }: any) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    flexDirection: 'row',
  },
}));

export const InputLabel = styled.label<{ hasError?: boolean }>(({ theme, hasError }: any) => ({
  textAlign: 'left',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '1em',
  paddingLeft: '5px',
  color: hasError ? theme.colors.warning : theme.colors.black,
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    textAlign: 'right',
    width: '30%',
    paddingLeft: 0,
  },
}));

export const InputWrapper = styled.div<{ hasLabel?: boolean }>(({ theme, hasLabel }: any) => ({
  position: 'relative',
  width: '100%',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: hasLabel ? '70%' : '100%',
    marginLeft: '10px',
  },
  '& input:focus + .line:after': {
    transform: 'scaleX(1)',
  },
}));

export const Line = styled.div<{ hasError?: boolean }>(({ theme, hasError }: any) => ({
  width: '100%',
  height: '3px',
  position: 'absolute',
  bottom: '0px',
  background: theme.colors.gray.calm,

  '&:after': {
    content: '" "',
    position: 'absolute',
    float: 'right',
    width: '100%',
    height: '3px',

    transform: 'scalex(0)',
    transition: 'transform 0.3s ease',

    background: hasError ? theme.colors.warning : theme.colors.primary,
  },
  '': {},
}));

export const IconWrapper = styled.div({
  position: 'absolute',
  right: 0,
  bottom: 0,
});

export const NativeInput = styled.input({
  background: 0,
  border: 0,
  outline: 'none',
  fontSize: '1.1em',
  width: '100%',
});

export const PlainInput = styled.input`
  color: inherit;
  font-size: inherit;
  background: inherit;
  line-height: inherit;
  outline: none;
  border: none;
  font-family: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  padding: 0;
  margin: 0;
  border-width: 0;
  display: block;
  width: 100%;
`;
