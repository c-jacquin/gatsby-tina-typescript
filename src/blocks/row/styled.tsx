import styled from '@emotion/styled';

interface RowContainerProps {
  flexAlign: string;
  flexReverse: boolean;
}

export const RowContainer = styled.section<RowContainerProps>(({ flexAlign = 'flex-start', flexReverse, theme }: any) => ({
  display: 'flex',
  flexDirection: flexReverse ? 'column-reverse' : 'column',
  justifyContent: flexAlign,
  width: '100%',

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    display: 'flex',
    flexDirection: flexReverse ? 'row-reverse' : 'row',
  },
}));
