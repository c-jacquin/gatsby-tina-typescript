import { containerForm } from '../common';
import ContentBlock from './content';
import FormBlock from './form';
import MapBlock from './map';
import TitleBlock from './title';
import NewsletterBlock from './newsletter';

const ColBlock = {
  label: 'col',
  fields: [
    {
      label: 'width',
      name: 'width',
      component: 'slider',
      min: '0',
      max: '100',
      step: '1',
    },
    ...containerForm,
    {
      label: 'col',
      name: 'blocks',
      component: 'blocks',
      templates: {
        ContentBlock,
        MapBlock,
        FormBlock,
        TitleBlock,
        NewsletterBlock,
      },
    },
  ],
  defaultItem: {
    width: 50,
    hpadding: 0,
    vpadding: 0,
    hmargin: 0,
    vmargin: 0,
    blocks: [],
  },
};

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
        ColBlock,
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
