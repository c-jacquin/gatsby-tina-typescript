const ContentBlock = {
  label: 'Markdown content',
  fields: [
    {
      label: 'markdown Content',
      name: 'markdown',
      component: 'markdown',
    },
    {
      label: 'Custom Css',
      name: 'style',
      component: 'css',
    },
  ],
  defaultItem: {
    markdown: '',
    style: '',
  },
};

export default ContentBlock;
