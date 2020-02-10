/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

const commonImageForm = {
  parse: (filename: string) => filename,
  previewSrc: (formValues: any, { input }: any) => {
    const imagePath = _.get(formValues, input.name);

    return formValues.jsonNode.files.find(({ node: { relativePath } }: any) => {
      return relativePath === imagePath;
    })?.node.childImageSharp.fluid.src;
  },
  uploadDir: () => '/assets/images/',
};

export default {
  image: commonImageForm,
};
