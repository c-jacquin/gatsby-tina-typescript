const seoFormConfig = {
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
      label: 'Author',
      name: 'rawJson.author',
      description: 'The author of the website (SEO)',
      component: 'text',
    },
    {
      label: 'Copyright',
      name: 'rawJson.copyright',
      description: 'The copyright of your website (SEO)',
      component: 'text',
    },
    {
      label: 'App name',
      name: 'rawJson.appName',
      description: 'The name of the application (SEO)',
      component: 'text',
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

export default seoFormConfig;
