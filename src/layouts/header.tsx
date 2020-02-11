/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import navForm from '../@cms/form/nav';
import { HeaderContainer, HeaderInner, NavigationLink } from './styled';

const Header: React.FC = () => {
  const { navJson } = useStaticQuery(graphql`
    query NavHeader {
      navJson {
        fileRelativePath
        rawJson
        id
        header {
          path
          label
        }
      }
    }
  `);

  const [{ header }] = useGlobalJsonForm(navJson, navForm) as any;

  return (
    <HeaderContainer>
      <HeaderInner>
        {header.map(({ path, label }: any) => (
          <NavigationLink key={path} to={path}>
            {label}
          </NavigationLink>
        ))}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
