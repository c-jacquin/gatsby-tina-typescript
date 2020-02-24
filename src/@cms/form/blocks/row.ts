import { containerForm } from '../common';
import ContentBlock from './content';
import FormBlock from './form';
import MapBlock from './map';
import TitleBlock from './title';
import NewsletterBlock from './newsletter';
import BannerBlock from './banner';
import ImageBlock from './image';

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

const makeColBlock = (block: any) => {
  return {
    ...block,
    fields: [...colFields, ...block.fields],
    defaultItem: {
      ...block.defaultItem,
      flex: 1,
      hmargin: 0,
      vmargin: 0,
      hpadding: 0,
      vpadding: 0,
    },
  };
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
        ContentBlock: makeColBlock(ContentBlock),
        MapBlock: makeColBlock(MapBlock),
        FormBlock: makeColBlock(FormBlock),
        TitleBlock: makeColBlock(TitleBlock),
        NewsletterBlock: makeColBlock(NewsletterBlock),
        BannerBlock: makeColBlock(BannerBlock),
        ImageBlock: makeColBlock(ImageBlock),
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
