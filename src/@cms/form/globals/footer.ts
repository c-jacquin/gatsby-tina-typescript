import RowBlock from '../blocks/row';

const footerForm = {
  fields: [
    {
      label: 'Footer content',
      name: 'rawJson.rows',
      component: 'blocks',
      templates: {
        RowBlock,
      },
    },
  ],
};

export default footerForm;
