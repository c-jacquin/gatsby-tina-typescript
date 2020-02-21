import commonForm from './common';

const Page2colForm = {
  fields: [
    {
      ...commonForm.pageBlocks,
      label: 'Main Sections',
    },
    {
      ...commonForm.asideBlocks,
      label: 'Aside Blocks',
    },
  ],
};

export default Page2colForm;
