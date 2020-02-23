const spacerBlock = {
  label: 'Spacer',
  fields: [
    {
      label: 'height',
      name: 'height',
      component: 'slider',
      step: 1,
      min: 1,
      max: 400,
    },
    {
      label: 'has line ?',
      name: 'hasLine',
      component: 'toggle',
    },
    {
      label: 'line color',
      name: 'lineColor',
      component: 'color',
    },
  ],
  defaultItem: {
    height: 100,
    hasLine: false,
    color: '#000',
  },
};

export default spacerBlock;
