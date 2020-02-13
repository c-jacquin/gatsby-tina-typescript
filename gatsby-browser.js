import CssField from './src/@cms/fields/css';
import SliderField from './src/@cms/fields/slider';

export const onClientEntry = () => {
  window.tinacms.fields.add({
    name: 'css',
    Component: CssField,
  });

  window.tinacms.fields.add({
    name: 'slider',
    Component: SliderField,
  });
};
