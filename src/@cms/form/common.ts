/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

import { getThumbnail } from '../helpers/thumbnail';

export const commonImageForm = {
  parse: (filename: string) => filename,
  previewSrc: (formValues: any, { input }: any) => {
    return getThumbnail(formValues.jsonNode?.files || [], _.get(formValues, input.name));
  },
  uploadDir: () => '/content/assets/images/',
};

export const containerForm = [
  {
    label: 'vertical padding',
    name: 'vpadding',
    component: 'slider',
    min: '0',
    max: '10',
    step: '0.1',
  },
  {
    label: 'horizontal padding',
    name: 'hpadding',
    component: 'slider',
    min: '0',
    max: '10',
    step: '0.1',
  },
  {
    label: 'vertical margin',
    name: 'vmargin',
    component: 'slider',
    min: '0',
    max: '10',
    step: '0.1',
  },
  {
    label: 'horizontal margin',
    name: 'hmargin',
    component: 'slider',
    min: '0',
    max: '10',
    step: '0.1',
  },
];
