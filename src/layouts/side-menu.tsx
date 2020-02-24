import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { transparentize } from 'polished';
import React, { useContext, useMemo } from 'react';
import { slide, bubble, elastic, fallDown, push, pushRotate, reveal, scaleDown, scaleRotate, stack } from 'react-burger-menu';

import { MenuContext } from '../context/side-menu';
import { SideMenuContainer, NavigationLink, HeaderLogo, LogoWrapper } from './styled';

const menu: Record<string, typeof slide> = {
  bubble,
  elastic,
  fallDown,
  push,
  pushRotate,
  reveal,
  scaleDown,
  scaleRotate,
  slide,
  stack,
};

const SideMenu = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const {
    settingsJson: { color, backgroundColor, fontSize, mobileLogo, withLogo, activeLinkColor, links, sideMenuType },
  } = useStaticQuery(graphql`
    query SideMenu {
      settingsJson(fileRelativePath: { regex: "/header/" }) {
        color
        backgroundColor
        fontSize
        mobileLogo {
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
        sideMenuType
      }
    }
  `);
  const Menu = useMemo(() => menu[sideMenuType], [sideMenuType]);
  const linkStyle = {
    color,
    fontSize,
  };

  const logoSrc = mobileLogo.childImageSharp.fluid.src;

  return (
    <SideMenuContainer>
      <Menu
        isOpen={isMenuOpen}
        disableCloseOnEsc
        pageWrapId="main"
        outerContainerId="root"
        burgerBarClassName={
          css`
            display: none;
          `.styles
        }
        styles={
          {
            bmBurgerButton: {
              display: 'none',
            },
            bmMenuWrap: {
              backgroundColor,
            },
          } as any
        }
      >
        {withLogo && logoSrc && (
          <LogoWrapper>
            <HeaderLogo height="150px" src={logoSrc} />
          </LogoWrapper>
        )}
        {links.map(({ path, label }: any) => (
          <NavigationLink
            key={path}
            to={path}
            style={linkStyle}
            activeStyle={{
              backgroundColor: activeLinkColor ? transparentize(0.7, activeLinkColor) : 'inherit',
            }}
            activeColor={activeLinkColor}
          >
            {label}
          </NavigationLink>
        ))}
      </Menu>
    </SideMenuContainer>
  );
};

export default SideMenu;
