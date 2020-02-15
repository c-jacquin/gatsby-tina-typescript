import React from 'react';
import { Link } from 'gatsby';

import { StyledButton } from './styled';

interface ButtonProps {
  type?: 'submit' | 'button';
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', to }) => {
  if (to) {
    return (
      <Link to={to}>
        <StyledButton type={type}>{children}</StyledButton>
      </Link>
    );
  }

  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
