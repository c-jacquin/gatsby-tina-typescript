import { containerForm } from '../common';
import ContentBlock from './content';
import FormBlock from './form';
import MapBlock from './map';
import TitleBlock from './title';
import NewsletterBlock from './newsletter';
import BannerBlock from './banner';

const colFields = [
  {
    label: 'flex',
    name: 'flex',
    component: 'slider',
    min: '1',
    max: '10',
    step: '1',
  },
  ...containerForm,
];

const RowBlock = {
  label: 'row',
  fields: [
    {
      label: 'flex alignment',
      name: 'flexAlign',
      component: 'select',
      options: ['flex-start', 'flex-end', 'space-between', 'space-around'],
    },
    {
      label: 'flex reverse',
      name: 'flexReverse',
      component: 'toggle',
    },
    ...containerForm,
    {
      label: 'columns',
      name: 'cols',
      component: 'blocks',
      templates: {
        ContentBlock: {
          ...ContentBlock,
          fields: [...colFields, ...ContentBlock.fields],
        },
        MapBlock: {
          ...MapBlock,
          fields: [...colFields, ...MapBlock.fields],
        },
        FormBlock: {
          ...FormBlock,
          fields: [...colFields, ...FormBlock.fields],
        },
        TitleBlock: {
          ...TitleBlock,
          fields: [...colFields, ...TitleBlock.fields],
        },
        NewsletterBlock: {
          ...NewsletterBlock,
          fields: [...colFields, ...NewsletterBlock.fields],
        },
        BannerBlock: {
          ...BannerBlock,
          fields: [...colFields, ...BannerBlock.fields],
        },
      },
    },
  ],
  defaultItem: {
    flexAlign: 'flex-start',
    flexReverse: false,
    hpadding: 0,
    vpadding: 0,
    hmargin: 0,
    vmargin: 0,
    cols: [],
  },
};

export default RowBlock;
