import commonForm from './common';

const headerForm = {
  fields: [
    {
      label: 'Display logo ?',
      name: 'rawJson.withLogo',
      component: 'toggle',
    },
    {
      label: 'Logo',
      name: 'rawJson.logo',
      description: 'Your logo',
      component: 'image',
      ...commonForm.image,
    },
    {
      label: 'Mobile Logo',
      name: 'rawJson.mobileLogo',
      description: 'Your logo for mobile version (in the side menu)',
      component: 'image',
      ...commonForm.image,
    },
    {
      label: 'Mobile Menu animation',
      name: 'rawJson.sideMenuType',
      description: 'the animation used by the mobile burger navigation menu',
      component: 'select',
      options: ['bubble', 'elastic', 'fallDown', 'push', 'pushRotate', 'reveal', 'scaleDown', 'scaleRotate', 'slide', 'stack'].map(
        value => ({
          value,
          label: value,
        }),
      ),
    },
    {
      label: 'Background color',
      name: 'rawJson.backgroundColor',
      component: 'color',
    },
    {
      label: 'Active Link bg color',
      name: 'rawJson.activeLinkColor',
      component: 'color',
    },
    {
      label: 'Text size',
      name: 'rawJson.fontSize',
      component: 'text',
    },
    {
      label: 'Text color',
      name: 'rawJson.color',
      component: 'color',
    },
    {
      label: 'Link spaces',
      name: 'rawJson.linkSpace',
      component: 'text',
    },
    {
      label: 'Header navigation',
      name: 'rawJson.links',
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
          component: 'read-only',
        },
      ],
    },
  ],
};

export default headerForm;
