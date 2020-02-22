const MapBlock = {
  label: 'Map',
  fields: [
    {
      label: 'lattitude',
      name: 'lat',
      component: 'number',
      step: '0.01',
    },
    {
      label: 'longitude',
      name: 'lng',
      component: 'number',
      step: '0.01',
    },
    {
      label: 'zoom',
      name: 'zoom',
      component: 'number',
      step: '1',
    },
    {
      label: 'flex',
      name: 'flex',
      description: 'full width and height map (ignore width and height define right above)',
      component: 'toggle',
    },
    {
      label: 'height',
      name: 'height',
      component: 'text',
    },
    {
      label: 'width',
      name: 'width',
      component: 'text',
    },
  ],
  defaultItem: () => ({
    lat: 40,
    lng: 40,
    zoom: 13,
    height: 300,
    width: 300,
  }),
};

export default MapBlock;