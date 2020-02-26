import styled from '@emotion/styled';
import Img from 'gatsby-image';
import _ from 'lodash';
import React from 'react';

import { ImageSharp } from '@typings/image';

const ImageWrapper = styled.div`
  overflow: hidden;
`;

interface ImageProps {
  data: {
    image: ImageSharp;
  };
}

const Image: React.FC<ImageProps> = ({ data }) => {
  return (
    data.image &&
    data.image.childImageSharp && (
      <ImageWrapper>
        <Img fluid={data.image.childImageSharp.fluid} />
      </ImageWrapper>
    )
  );
};

export default Image;

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

export const ImageBlock = {
  label: 'Image',
  name: 'image',
  key: 'test',
  defaultItem: {
    image: '',
  },
  fields: [imageField],
};
