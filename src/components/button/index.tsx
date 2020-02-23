import React, { CSSProperties } from 'react';
import { Link } from 'gatsby';

import { StyledButton, StyleType } from './styled';

interface ButtonProps {
  styleType?: StyleType;
  type?: 'submit' | 'button';
  to?: string;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, style, className, type = 'button', to, styleType = 'primary' }) => {
  if (to) {
    return (
      <Link to={to}>
        <StyledButton styleType={styleType} type={type} style={style} className={className}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton styleType={styleType} type={type} style={style} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
