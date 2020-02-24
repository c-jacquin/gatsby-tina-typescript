const ContentBlock = {
  label: 'Markdown content',
  fields: [
    {
      label: 'markdown Content',
      name: 'content',
      component: 'markdown',
    },
    {
      label: 'Custom Css',
      name: 'style',
      component: 'css',
    },
  ],
  defaultItem: {
    content: '',
    style: '',
  },
};

export default ContentBlock;
