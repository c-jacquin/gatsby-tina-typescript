import React from 'react';
import OpenMap from 'pigeon-maps';

import useIsMobile from '../../hooks/useIsMobile';

interface MapProps {
  lat: number;
  lng: number;
  zoom: number;
  flex?: boolean;
  width: string;
  height: string;
}

const Map: React.FC<MapProps> = ({ lat, lng, zoom, width, height, flex }) => {
  const isMobile = useIsMobile();

  return (
    <OpenMap
      touchEvents={false}
      mouseEvents={false}
      center={[lat, lng]}
      zoom={zoom}
      width={flex ? undefined : width}
      height={!isMobile && flex ? undefined : height}
    />
  );
};

export default Map;
