/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { transparentize } from 'polished';

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: solid 1px black;
`;

export const CardImage = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(${url})`};
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardBody = styled.div`
  padding: ${({ theme }: any) => theme.dimensions.containerPadding};
  text-align: justify;
`;

export const CardTitle = styled.h1`
  align-self: center;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }: any) => transparentize(0.3, theme.colors.white)};
`;
