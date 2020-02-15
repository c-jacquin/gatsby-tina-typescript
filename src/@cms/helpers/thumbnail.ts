/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getThumbnail = (files: any[], image: string) => {
  return files.find(({ node }) => node.relativePath === image)?.node.childImageSharp.fluid.src;
};
