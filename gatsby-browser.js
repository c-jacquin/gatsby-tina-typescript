import CssField from './src/@cms/fields/css';
import SliderField from './src/@cms/fields/slider';
import ReadOnly from './src/@cms/fields/read-only';

export const onClientEntry = () => {
  window.tinacms.fields.add({
    name: 'css',
    Component: CssField,
  });

  window.tinacms.fields.add({
    name: 'slider',
    Component: SliderField,
  });

  window.tinacms.fields.add({
    name: 'read-only',
    Component: ReadOnly,
  });
};
