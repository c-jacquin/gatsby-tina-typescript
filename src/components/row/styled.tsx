/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

interface RowContainerProps {
  flexAlign: string;
  flexReverse: string;
  vmargin: number;
  vpadding: number;
  hmargin: number;
  hpadding: number;
}

export const RowContainer = styled.section<RowContainerProps>(
  ({ flexAlign = 'flex-start', flexReverse, vmargin, hmargin, hpadding, vpadding, theme }: any) => ({
    display: 'flex',
    flexDirection: flexReverse ? 'column-reverse' : 'column',
    justifyContent: flexAlign,
    padding: `${vpadding / 2}em 0`,
    margin: `${vmargin / 2}em 0`,

    [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
      padding: `${vpadding}em ${hpadding}em`,
      margin: `${vmargin}em ${hmargin}em`,
      display: 'flex',
      flexDirection: flexReverse ? 'row-reverse' : 'row',
    },
  }),
);

interface ColContainerProps {
  width: number;
  vmargin: number;
  vpadding: number;
  hmargin: number;
  hpadding: number;
}

export const ColContainer = styled.div<ColContainerProps>(({ hpadding, hmargin, vmargin, vpadding, width, theme }: any) => ({
  margin: `${vmargin} 0`,
  padding: `${vpadding} 0`,
  width: '100%',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: `${width}%`,
    margin: `${vmargin} ${hmargin}`,
    padding: `${vpadding} ${hpadding}`,
  },
}));
