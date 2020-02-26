import styled from '@emotion/styled';
import Img from 'gatsby-image';
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
