import React from 'react';

import { HeaderContainer, HeaderInner, HomepageLink } from './styled';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <HeaderContainer>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </HeaderContainer>
);

export default Header;
