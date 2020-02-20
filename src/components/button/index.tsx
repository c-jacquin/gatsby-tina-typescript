import React from 'react';
import { Link } from 'gatsby';

import { StyledButton, StyleType } from './styled';

interface ButtonProps {
  styleType?: StyleType;
  type?: 'submit' | 'button';
  to?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', to, styleType = 'primary' }) => {
  if (to) {
    return (
      <Link to={to}>
        <StyledButton styleType={styleType} type={type}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton styleType={styleType} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
