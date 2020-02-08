export const seoFormConfig = {
  fields: [
    {
      label: 'Title',
      name: 'rawJson.title',
      description: 'The title of your website (SEO)',
      component: 'text',
    },
    {
      label: 'Description',
      name: 'rawJson.description',
      description: 'A quick description of your site for web browser (SEO)',
      component: 'textarea',
    },
    {
      label: 'Keywords',
      name: 'rawJson.keywords',
      description: 'A list of keywords corresponding to your site (not used by search engine)',
      component: 'group-list',
      itemProps: (item: { label: string }, idx: number) => ({
        key: idx,
        label: item.label,
      }),
      defaultItem: () => ({
        label: 'enter your keyword',
      }),
      fields: [
        {
          label: 'Keyword',
          name: 'label',
          component: 'text',
        },
      ],
    },
  ],
};

export const indexFormConfig = {
  fields: [
    {
      label: 'Hello',
      name: 'rawJson.hello',
      description: 'Just the basic hello world !',
      component: 'text',
    },
    {
      label: 'Message',
      name: 'rawJson.message',
      description: 'Dead end...',
      component: 'text',
    },
  ],
};

export const errorFormConfig = {
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
