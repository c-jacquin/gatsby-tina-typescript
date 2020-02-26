import { FluidObject } from 'gatsby-image';

export interface ImageSharp {
  childImageSharp: {
    fluid: FluidObject;
  };
}
