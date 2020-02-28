import React from 'react';
import { TileLayer, ZoomControl, Marker } from 'react-leaflet';

import Spinner from '@components/spinner';
import { MapWrapper, StyledMap } from './styled';

export interface MapProps {
  lat: number;
  lng: number;
  zoom: number;
  height?: number;
  width?: number;
  markers?: { lat: number; lng: number }[];
  zoomControl?: boolean;
}

const Map: React.FC<MapProps> = ({ markers, lat, lng, zoom, height, width, zoomControl }) => {
  // const mapRef = useRef<BaseMap>();

  // useEffect(() => {
  //   if (mapRef.current) {
  //     mapRef?.current?.leafletElement.flyTo({ lat, lng }, zoom, {
  //       duration: 3,
  //     });
  //   }
  // }, [mapRef, lat, lng, zoom]);

  if (typeof window === 'undefined') {
    return (
      <MapWrapper height={height} width={width}>
        <Spinner />
      </MapWrapper>
    );
  }

  return (
    <MapWrapper height={height} width={width}>
      <StyledMap zoomControl={false} touchZoom={false} dragging={false} center={{ lat, lng }} zoom={zoom}>
        {markers && markers.map(position => <Marker position={position} />)}
        <TileLayer
          name="OpenStreetMap"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {zoomControl && <ZoomControl position="bottomright" />}
      </StyledMap>
    </MapWrapper>
  );
};

export default Map;
