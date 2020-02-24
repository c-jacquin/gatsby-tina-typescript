import { imageField } from '../common';

const ImageBlock = {
  label: 'Image',
  name: 'image',
  key: 'test',
  defaultItem: {
    image: '',
  },
  fields: [imageField],
};

export default ImageBlock;
