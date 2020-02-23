const TitleBlock = {
  label: 'Title',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'color',
      name: 'color',
      component: 'color',
    },
    {
      label: 'align',
      name: 'align',
      component: 'text',
    },
    {
      label: 'vertical margin',
      name: 'margin',
      component: 'slider',
      min: 0,
      max: 5,
      step: 0.1,
    },
    {
      label: 'title tag type',
      name: 'tag',
      component: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  ],
  defaultItem: {
    title: 'un titre',
    color: '#000',
    align: 'center',
    margin: '2',
    tag: 'h1',
  },
};

export default TitleBlock;
