import { Map } from 'react-leaflet';
import styled from '@emotion/styled';

export const MapWrapper = styled.div<{ height?: number; width?: number }>(({ height, width }) => ({
  height: height ? `${height}px` : '100%',
  width: width ? `${width}px` : '100%',
}));

export const StyledMap = styled(Map)({
  height: '100%',
});
