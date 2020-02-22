import { commonImageForm } from '../common';

const BannerBlock = {
  label: 'Banner',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'title color',
      name: 'titleColor',
      component: 'color',
    },
    {
      label: 'title tag type',
      name: 'tag',
      component: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    {
      label: 'image',
      name: 'image',
      component: 'image',
      ...commonImageForm,
    },
    {
      label: 'Height',
      name: 'height',
      component: 'slider',
      min: 1,
      max: 600,
      step: 1,
    },
    {
      label: 'parallax',
      name: 'parallax',
      component: 'slider',
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      label: 'background opacity',
      name: 'opacity',
      component: 'slider',
      min: -1,
      max: 1,
      step: 0.1,
    },
  ],
  defaultItem: {
    tag: 'h2',
    parallax: 0.5,
    opacity: 0,
    height: 200,
    title: 'A Title',
    color: '#000',
  },
};

export default BannerBlock;
