/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

export const imageField = {
  label: 'Image',
  name: 'image',
  component: 'image',
  parse: (filename: string) => `../assets/images/${filename}`,
  uploadDir: () => '/content/assets/images/',
  previewSrc: (formValues: any, fieldProps: any) => {
    const pathName = fieldProps.input.name.replace('rawJson', 'jsonNode');
    const imageNode = _.get(formValues, pathName);
    if (!imageNode || !imageNode.childImageSharp) return '';
    return imageNode.childImageSharp.fluid.src;
  },
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
