export const containerField = {
  label: 'Container',
  name: 'container',
  component: 'group',
  fields: [
    {
      label: 'top margin',
      name: 'marginTop',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'right margin',
      name: 'marginRight',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'bottom margin',
      name: 'marginBottom',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'left margin',
      name: 'marginLeft',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'top internal margin',
      name: 'paddingTop',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'right internal margin',
      name: 'paddingRight',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'bottom internal margin',
      name: 'paddingBottom',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'left internal margin',
      name: 'paddingLeft',
      component: 'slider',
      step: 0.01,
      min: 0,
      max: 20,
    },
    {
      label: 'flex',
      name: 'flex',
      component: 'slider',
      step: 1,
      min: 0,
      max: 20,
    },
    {
      label: 'background color',
      name: 'backgroundColor',
      component: 'color',
    },
    {
      label: 'flex alignment',
      name: 'flexJustify',
      component: 'select',
      options: ['flex-start', 'center', 'flex-end'],
    },
  ],
  defaultItem: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,

    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,

    flex: 0,
    flexJustify: 'center',
    backgroundColor: '',
  },
};

export function containerizeBlock(block: any) {
  return {
    ...block,
    fields: [...block.fields, containerField],
    defaultItem: {
      ...block.defaultItem,
      container: containerField.defaultItem,
    },
  };
}
