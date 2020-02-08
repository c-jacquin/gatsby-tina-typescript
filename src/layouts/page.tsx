import 'modern-normalize';

import { Global } from '@emotion/core';
import React from 'react';

import normalize from '../styles/normalize';
import Header from './header';
import { Main, Root } from './styled';

const PageLayout: React.FC = ({ children }) => (
  <Root>
    <Global styles={normalize} />
    <Header />
    <Main>{children}</Main>
  </Root>
);

export default PageLayout;
