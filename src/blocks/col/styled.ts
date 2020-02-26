import styled from '@emotion/styled';
import { Col } from '@typings/page';

interface ColContainerProps {
  flex: number;
  vmargin: number;
  vpadding: number;
  hmargin: number;
  hpadding: number;
}

export const ColContainer = styled.div<ColContainerProps>(({ hpadding, hmargin, vmargin, vpadding, flex, theme }: any) => ({
  margin: `${vmargin}em 0`,
  padding: `${vpadding}em 0`,
  position: 'relative',
  width: '100%',
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    width: 'auto',
    flex,
    margin: `${vmargin}em ${hmargin}em`,
    padding: `${vpadding}em ${hpadding}em`,
  },
}));
