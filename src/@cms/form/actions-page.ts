const actionsPageForm = {
  fields: [
    {
      label: 'Titre',
      name: 'rawJson.title',
      description: "page's title",
      component: 'text',
    },
    // {
    //   label: 'Actions',
    //   name: 'rawJson.actions',
    //   description: 'cameroonmusicbusiness actions, displayed on actions page and in home',
    //   component: 'group-list',
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   itemProps: (item: any, idx: number) => ({
    //     key: idx,
    //     ...item,
    //   }),
    //   defaultItem: () => ({
    //     thumbnail: '',
    //     title: 'Titre',
    //     content: 'Content',
    //     city: 'Gotham city',
    //     place: 'concert hall',
    //   }),
    //   fields: [
    //     {
    //       label: 'Titre',
    //       name: 'title',
    //       component: 'text',
    //     },
    //     {
    //       label: 'Thumbnail',
    //       name: 'image',
    //       component: 'image',
    //       ...commonForm.image,
    //     },
    //     {
    //       label: 'style',
    //       name: 'style',
    //       component: 'css',
    //     },
    //     {
    //       label: 'City',
    //       name: 'city',
    //       component: 'text',
    //     },
    //     {
    //       label: 'Concert hall',
    //       name: 'place',
    //       component: 'text',
    //     },
    //     {
    //       label: 'Date',
    //       name: 'date',
    //       component: 'date',
    //     },
    //   ],
    // },
  ],
};

export default actionsPageForm;
