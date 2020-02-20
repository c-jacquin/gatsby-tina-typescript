/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

import { getThumbnail } from '../helpers/thumbnail';

const commonImageForm = {
  parse: (filename: string) => filename,
  previewSrc: (formValues: any, { input }: any) => {
    return getThumbnail(formValues.jsonNode?.files || [], _.get(formValues, input.name));
  },
  uploadDir: () => '/content/assets/images/',
};

const titleTagSelect = {
  label: 'title tag type',
  name: 'tag',
  component: 'select',
  options: [
    {
      value: 'h1',
      label: 'h1',
    },
    {
      value: 'h2',
      label: 'h2',
    },
    {
      value: 'h3',
      label: 'h3',
    },
    {
      value: 'h4',
      label: 'h4',
    },
    {
      value: 'h5',
      label: 'h5',
    },
    {
      value: 'h6',
      label: 'h6',
    },
  ],
};

const TitleBlock = {
  label: 'Title',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'color',
      name: 'color',
      component: 'color',
    },
    {
      label: 'align',
      name: 'align',
      component: 'text',
    },
    {
      label: 'vertical margin',
      name: 'margin',
      component: 'slider',
      min: 0,
      max: 5,
      step: 0.1,
    },
    titleTagSelect,
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
      label: 'title color',
      name: 'titleColor',
      component: 'color',
    },
    titleTagSelect,
    {
      label: 'image',
      name: 'image',
      component: 'image',
      ...commonImageForm,
    },
    {
      label: 'Height',
      name: 'height',
      component: 'text',
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

const BlogPostGridBlock = {
  label: 'Blog post grid',
  fields: [
    {
      label: 'size',
      name: 'limit',
      component: 'number',
    },
  ],
};

const BlogPostListBlock = {
  label: 'Blog post list',
  fields: [
    {
      label: 'size',
      name: 'limit',
      component: 'number',
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
      BlogPostGridBlock,
      BlogPostListBlock,
    },
  },
};
