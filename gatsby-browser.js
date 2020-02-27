import CssField from './cms/css';
import SliderField from './cms/slider';
import ReadOnly from './cms/read-only';
import LocationInput from './cms/location';

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

  window.tinacms.fields.add({
    name: 'location',
    Component: LocationInput,
  });
};
