const navForm = {
  fields: [
    {
      label: 'Header navigation',
      name: 'rawJson.header',
      description: 'The links displayed in the header of the site',
      component: 'group-list',
      itemProps: (item: { label: string; path: string }, idx: number) => ({
        key: idx,
        label: item.label,
        path: item.path,
      }),
      defaultItem: () => ({
        label: 'a page',
        path: '/a-page',
      }),
      fields: [
        {
          label: 'displayd text',
          name: 'label',
          component: 'text',
        },
        {
          label: 'Link url',
          name: 'path',
          component: 'text',
        },
      ],
    },
  ],
};

export default navForm;
