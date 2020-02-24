import styled from '@emotion/styled';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

const ImageWrapper = styled.div`
  overflow: hidden;
`;

interface ImageProps {
  data: {
    image: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
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
