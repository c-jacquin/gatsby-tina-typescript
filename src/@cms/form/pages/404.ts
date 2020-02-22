const errorFormConfig = {
  fields: [
    {
      label: 'Title',
      name: 'rawJson.title',
      description: 'The title of the 404 page',
      component: 'text',
    },
    {
      label: 'Message',
      name: 'rawJson.message',
      description: 'The message of the 404 page',
      component: 'markdown',
    },
    {
      label: 'Back',
      name: 'rawJson.link',
      description: 'The text of the back link text',
      component: 'text',
    },
  ],
};

export default errorFormConfig;
