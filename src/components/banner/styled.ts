/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { ParallaxBanner } from 'react-scroll-parallax';

export const StyledParalaxBanner = styled(ParallaxBanner)<{ height: string }>(({ height }) => ({
  height: `${height} !important`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));
