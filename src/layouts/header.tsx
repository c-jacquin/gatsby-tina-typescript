import React from 'react';

import { HeaderContainer, HeaderInner, HomepageLink } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HomepageLink to="/">Titre !!!</HomepageLink>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
