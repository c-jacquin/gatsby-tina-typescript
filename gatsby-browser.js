import CssField from './cms/css';
import SliderField from './cms/slider';
import ReadOnly from './cms/read-only';

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
