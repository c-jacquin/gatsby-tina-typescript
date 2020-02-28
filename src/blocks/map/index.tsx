import { graphql } from 'gatsby';
import React from 'react';
// import OpenMap from 'pigeon-maps';

import OpenMap from '@components/map';
import useIsMobile from '@hooks/useIsMobile';

interface MapProps {
  lat: number;
  lng: number;
  zoom: number;
  flexMap?: boolean;
  width?: number;
  height?: number;
}

const Map: React.FC<MapProps> = ({ lat, lng, zoom, width, height, flexMap }) => {
  const isMobile = useIsMobile();

  return (
    <OpenMap
      lat={lat}
      lng={lng}
      zoom={zoom}
      zoomControl={false}
      width={flexMap ? undefined : width}
      height={!isMobile && flexMap ? undefined : height}
    />
  );
};

export default Map;

export const MapBlock = {
  label: 'Map',
  fields: [
    {
      label: 'lattitude',
      name: 'lat',
      component: 'slider',
      step: 0.01,
      min: -90,
      max: 90,
    },
    {
      label: 'longitude',
      name: 'lng',
      component: 'slider',
      step: 0.01,
      min: -180,
      max: 180,
    },
    {
      label: 'zoom',
      name: 'zoom',
      component: 'slider',
      step: 1,
      min: 1,
      max: 30,
    },
    {
      label: 'flex',
      name: 'flexMap',
      description: 'full width and height map (ignore width and height define right above)',
      component: 'toggle',
    },
    {
      label: 'height',
      name: 'height',
      component: 'slider',
      min: 0,
      max: 500,
      step: 1,
    },
    {
      label: 'width',
      name: 'width',
      component: 'slider',
      min: 0,
      max: 500,
      step: 1,
    },
  ],
  defaultItem: {
    lat: 40,
    lng: 40,
    zoom: 13,
    height: 300,
    width: 300,
    flexMap: false,
  },
};

export const MapFragment = graphql`
  fragment MapBlock on PagesJsonSections {
    lat
    lng
    zoom
    height
    width
    flexMap
  }
`;

export const MapColsFragment = graphql`
  fragment MapColsBlock on PagesJsonSectionsCols {
    lat
    lng
    zoom
    height
    width
    flexMap
  }
`;

export const MapAsideFragment = graphql`
  fragment MapAsideBlock on PagesJsonAside {
    lat
    lng
    zoom
    height
    width
    flexMap
  }
`;
