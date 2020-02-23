import React from 'react';

import { CardContent, CardWrapper, CardTitle, CardBody, CardButton } from './styled';

interface CardProps {
  image: string;
  title: string;
  content: string;
  path?: string;
}

const Card: React.FC<CardProps> = ({ image, title, content, path }) => {
  return (
    <CardWrapper imageUrl={image}>
      <CardContent className="content">
        <CardTitle className="title">{title}</CardTitle>
        <CardBody dangerouslySetInnerHTML={{ __html: content }} />
        <CardButton to={path}>En savoir plus</CardButton>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
