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

const FormBlock = {
  label: 'Form',
  fields: [
    {
      label: 'Api url',
      name: 'apiUrl',
      component: 'text',
    },
    {
      label: 'Server error message',
      name: 'errorMessage',
      component: 'text',
    },
    {
      label: 'Label on the submit button',
      name: 'submitLabel',
      component: 'text',
    },
    {
      label: 'Success message',
      name: 'successMessage',
      component: 'text',
    },
    {
      label: 'Form fields',
      name: 'fields',
      description: 'The fields of the form',
      component: 'group-list',
      itemProps: (item: any, idx: number) => ({
        key: idx,
        ...item,
      }),
      defaultItem: () => ({
        type: 'text',
        name: 'a name',
        label: '',
        errorMessage: 'error',
        required: false,
      }),
      fields: [
        {
          label: 'label',
          name: 'label',
          component: 'text',
        },
        {
          label: 'name',
          name: 'name',
          component: 'text',
        },
        {
          label: 'error message',
          name: 'fieldErrorMessage',
          component: 'text',
        },
        {
          label: 'is required',
          name: 'required',
          component: 'toggle',
        },
        {
          label: 'type',
          name: 'path',
          component: 'select',
          options: ['text', 'email', 'textarea'].map(value => ({
            value,
            label: value,
          })),
        },
      ],
    },
  ],
};

const NewsletterBlock = {
  label: 'Newsletter widget',
  fields: [
    {
      label: 'Forms endpoint',
      name: 'apiUrl',
      description: 'The endpoints used by newsletter form and contact forms (!!!)',
      component: 'text',
    },
    {
      label: 'Newsletter form label',
      name: 'title',
      description: 'The label on top of your newsletter form',
      component: 'text',
    },
    {
      label: 'Newsletter email error label',
      name: 'fieldErrorMessage',
      description: 'The error message displayed when email is invalid',
      component: 'text',
    },
    {
      label: 'Newsletter form error label',
      name: 'errorMessage',
      description: 'The error message when something fail on submit',
      component: 'text',
    },
    {
      label: 'Newsletter form success label',
      name: 'successMessage',
      description: 'The message displayed when the form submitted successfully',
      component: 'text',
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
  defaultItem: () => ({
    title: 'un titre',
    color: '#000',
    align: 'center',
    margin: '2',
    tag: 'h1',
  }),
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
      FormBlock,
      NewsletterBlock,
    },
  },
  asideBlocks: {
    label: 'Aside Blocks',
    name: 'rawJson.aside',
    component: 'blocks',
    templates: {
      TitleBlock,
      BannerBlock,
      ContentBlock,
      BlogPostGridBlock,
      BlogPostListBlock,
      FormBlock,
      NewsletterBlock,
    },
  },
};
