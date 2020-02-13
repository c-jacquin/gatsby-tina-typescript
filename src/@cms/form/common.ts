/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

const commonImageForm = {
  parse: (filename: string) => filename,
  previewSrc: (formValues: any, { input }: any) => {
    const imagePath = _.get(formValues, input.name);

    return formValues.jsonNode?.files?.find(({ node: { relativePath } }: any) => {
      return relativePath === imagePath;
    })?.node.childImageSharp.fluid.src;
  },
  uploadDir: () => '/assets/images/',
};

const TitleBlock = {
  label: 'Title',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
  ],
};

const BannerBlock = {
  label: 'Banner',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'image',
      name: 'image',
      component: 'image',
      ...commonImageForm,
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
      label: 'Height',
      name: 'height',
      component: 'text',
    },
  ],
};

const ContentBlock = {
  label: 'Markdown content',
  fields: [
    {
      label: 'Content',
      name: 'content',
      component: 'markdown',
    },
    {
      label: 'Custom Css',
      name: 'style',
      component: 'css',
    },
  ],
};

export default {
  image: commonImageForm,
  pageBlocks: {
    label: 'Page Sections',
    name: 'rawJson.sections',
    component: 'blocks',
    templates: {
      TitleBlock,
      BannerBlock,
      ContentBlock,
    },
  },
};
