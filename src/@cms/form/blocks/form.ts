const FormBlock = {
  label: 'Form',
  fields: [
    {
      label: 'Api url',
      name: 'apiUrl',
      component: 'text',
    },
    {
      label: 'Server error message',
      name: 'errorMessage',
      component: 'text',
    },
    {
      label: 'Label on the submit button',
      name: 'submitLabel',
      component: 'text',
    },
    {
      label: 'Success message',
      name: 'successMessage',
      component: 'text',
    },
    {
      label: 'Form fields',
      name: 'fields',
      description: 'The fields of the form',
      component: 'group-list',
      itemProps: (item: any, idx: number) => ({
        key: idx,
        ...item,
      }),
      defaultItem: {
        type: 'text',
        name: 'a name',
        label: '',
        errorMessage: 'error',
        required: false,
      },
      fields: [
        {
          label: 'label',
          name: 'label',
          component: 'text',
        },
        {
          label: 'name',
          name: 'name',
          component: 'text',
        },
        {
          label: 'error message',
          name: 'fieldErrorMessage',
          component: 'text',
        },
        {
          label: 'is required',
          name: 'required',
          component: 'toggle',
        },
        {
          label: 'type',
          name: 'path',
          component: 'select',
          options: ['text', 'email', 'textarea'],
        },
      ],
    },
  ],
};

export default FormBlock;
