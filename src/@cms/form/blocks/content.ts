const ContentBlock = {
  label: 'Markdown content',
  fields: [
    {
      label: 'Content',
      name: 'content',
      component: 'markdown',
    },
    {
      label: 'Custom Css',
      name: 'style',
      component: 'css',
    },
  ],
};

export default ContentBlock;
