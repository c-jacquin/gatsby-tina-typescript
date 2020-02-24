/* eslint-disable @typescript-eslint/no-explicit-any */
import '@animated-burgers/burger-squeeze/dist/styles.css';

import { useTheme } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import { transparentize } from 'polished';
import React, { useMemo, useContext } from 'react';

import headerForm from '../@cms/form/globals/header';
import { MenuContext } from '../context/side-menu';
import useScroll from '../hooks/useScroll';
import { Theme } from '../styles/theme';
import { HeaderContainer, Navbar, NavigationLink, HeaderLogo, MenuButton } from './styled';
import useIsMobile from '../hooks/useIsMobile';

const Header: React.FC = () => {
  const { settingsJson } = useStaticQuery(graphql`
    query Header {
      settingsJson(fileRelativePath: { regex: "/header/" }) {
        fileRelativePath
        rawJson
        id
        color
        backgroundColor
        fontSize
        linkSpace
        logo {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        withLogo
        activeLinkColor
        links {
          path
          label
        }
      }
    }
  `);

  const theme = useTheme<Theme>();
  const isMobile = useIsMobile();
  const [{ links, withLogo, logo, linkSpace, color, fontSize, backgroundColor, activeLinkColor }] = useLocalJsonForm(
    settingsJson,
    headerForm,
  ) as any;
  const { toggleMenu, isMenuOpen } = useContext(MenuContext);
  const { isTop, scrollDirection } = useScroll({
    offset: isMobile ? theme.dimensions.heights.headerMobile : theme.dimensions.heights.header,
    throttleTime: 200,
  });

  const linkStyle = {
    padding: `0 ${linkSpace}`,
    color,
    fontSize,
  };

  return (
    <HeaderContainer color={backgroundColor} isTop={isTop} scrollDirection={scrollDirection}>
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      {withLogo && !!logo && <HeaderLogo src={settingsJson.logo.childImageSharp.fluid.src} />}
      <Navbar>
        {links.map(({ path, label }: any) => (
          <NavigationLink
            key={path}
            to={path}
            style={linkStyle}
            activeColor={activeLinkColor}
            activeStyle={{
              backgroundColor: activeLinkColor ? transparentize(0.7, activeLinkColor) : 'inherit',
            }}
          >
            {label}
          </NavigationLink>
        ))}
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
