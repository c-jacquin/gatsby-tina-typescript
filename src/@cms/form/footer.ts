const footerForm = {
  fields: [
    {
      label: 'Map lattitude',
      name: 'rawJson.lat',
      component: 'number',
      step: '0.01',
    },
    {
      label: 'Map longitude',
      name: 'rawJson.lng',
      component: 'number',
      step: '0.01',
    },
    {
      label: 'Map longitude',
      name: 'rawJson.zoom',
      component: 'number',
      step: '0.01',
    },
  ],
};

export default footerForm;
