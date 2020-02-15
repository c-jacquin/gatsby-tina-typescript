import React from 'react';

import { CardImage, CardWrapper, CardTitle, CardBody } from './styled';
import Button from '../button';

interface CardProps {
  image: string;
  title: string;
  content: string;
  path?: string;
}

const Card: React.FC<CardProps> = ({ image, title, content, path }) => {
  return (
    <CardWrapper>
      <CardImage url={image}>
        <CardTitle>{title}</CardTitle>
      </CardImage>
      <CardBody dangerouslySetInnerHTML={{ __html: content }} />
      {path && <Button to={path}>En savoir plus</Button>}
    </CardWrapper>
  );
};

export default Card;
