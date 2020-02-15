/* eslint-disable @typescript-eslint/no-explicit-any */
import '@animated-burgers/burger-squeeze/dist/styles.css';

import { useStaticQuery, graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React, { useMemo, useContext } from 'react';
// don't forget the styles
import headerForm from '../@cms/form/header';
import { MenuContext } from '../context/side-menu';
import { HeaderContainer, Navbar, NavigationLink, HeaderLogo, MenuButton } from './styled';
import { getThumbnail } from '../@cms/helpers/thumbnail';

const Header: React.FC = () => {
  const { headerJson, allFile } = useStaticQuery(graphql`
    query NavHeader {
      headerJson {
        fileRelativePath
        rawJson
        id
        color
        backgroundColor
        fontSize
        linkSpace
        mobileLogo
        logo
        withLogo
        activeLinkColor
        links {
          path
          label
        }
      }
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed {
                src
              }
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  headerJson.files = allFile.edges;

  const [{ links, withLogo, logo, linkSpace, color, fontSize, backgroundColor, activeLinkColor }] = useLocalJsonForm(
    headerJson,
    headerForm,
  ) as any;
  const { toggleMenu, isMenuOpen } = useContext(MenuContext);
  const logoSrc = useMemo(() => getThumbnail(allFile.edges, logo), [logo, allFile.edges]);

  const linkStyle = {
    padding: `0 ${linkSpace}`,
    color,
    fontSize,
  };

  return (
    <HeaderContainer color={backgroundColor}>
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      {withLogo && !!logo && <HeaderLogo src={logoSrc} />}
      <Navbar>
        {links.map(({ path, label }: any) => (
          <NavigationLink key={path} to={path} style={linkStyle} activeColor={activeLinkColor}>
            {label}
          </NavigationLink>
        ))}
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
