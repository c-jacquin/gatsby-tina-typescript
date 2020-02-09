import _ from 'lodash';

const commonImageForm = {
  parse: (filename: string) => `/assets/images/${filename}`,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  previewSrc: (formValues: any, { input }: any) => {
    return _.get(formValues, input.name);
  },
  uploadDir: () => {
    return '/assets/images/';
  },
};

export default {
  image: commonImageForm,
};
