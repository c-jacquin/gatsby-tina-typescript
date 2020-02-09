import _ from 'lodash';

const socialForm = {
  fields: [
    {
      label: 'Facebook title',
      name: 'rawJson.facebook.title',
      description: 'The title of the facebook widget',
      component: 'text',
    },
    {
      label: 'Facebook description',
      name: 'rawJson.facebook.description',
      description: 'The text that will appear in facebook share widget',
      component: 'textarea',
    },
    {
      label: 'Facebook type',
      name: 'rawJson.facebook.type',
      description: 'The type of content',
      component: 'text',
    },
    {
      label: 'Facebook url',
      name: 'rawJson.facebook.url',
      description: 'The url user will share on facebook',
      component: 'text',
    },
    {
      label: 'Facebook image',
      name: 'rawJson.facebook.image',
      description: 'The thumbnail of facebook share widget',
      component: 'image',
      parse: (filename: string) => `/assets/images/facebook-share${filename.split('.')[0]}`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      previewSrc: (formValues: any, { input }: any) => {
        return _.get(formValues, input.name);
      },
      uploadDir: () => {
        return '/assets/images/';
      },
    },
    {
      label: 'Twitter title',
      name: 'rawJson.twitter.title',
      description: 'The title of the twitter widget',
      component: 'text',
    },
    {
      label: 'Twitter description',
      name: 'rawJson.twitter.description',
      description: 'The text that will appear in twitter share widget',
      component: 'textarea',
    },
    {
      label: 'Twitter card',
      name: 'rawJson.twitter.card',
      description: 'The type of twitter widget (summary...)',
      component: 'text',
    },
    {
      label: 'Twitter image',
      name: 'rawJson.twitter.image',
      description: 'The thumbnail of twitter share widget',
      component: 'image',
      parse: (filename: string) => `/assets/images/facebook-share${filename.split('.')[0]}`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      previewSrc: (formValues: any, { input }: any) => {
        return _.get(formValues, input.name);
      },
      uploadDir: () => {
        return '/assets/images/';
      },
    },
  ],
};

export default socialForm;
