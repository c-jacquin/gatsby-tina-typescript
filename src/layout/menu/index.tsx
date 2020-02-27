import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { transparentize } from 'polished';
import React, { useContext, useMemo } from 'react';
import { slide, bubble, elastic, fallDown, push, pushRotate, reveal, scaleDown, scaleRotate, stack } from 'react-burger-menu';

import { Menus } from '@typings/menu';
import { Theme } from '@typings/theme';

import { MenuContext } from '@providers/menu';
import { NavigationLink } from '@layout/header/styled';
import { SideMenuContainer, LogoWrapper } from './styled';

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
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const {
    settingsJson: {
      header: { color, backgroundColor, fontSize, logo, withLogo, activeLinkColor, sideMenuType },
    },
    menus: { menus },
  } = useStaticQuery<{ settingsJson: Theme; menus: Menus }>(graphql`
    query SideMenu {
      settingsJson(fileRelativePath: { regex: "/theme/" }) {
        header {
          color
          backgroundColor
          fontSize
          logo {
            childImageSharp {
              fluid(quality: 70, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          withLogo
          activeLinkColor
          sideMenuType
        }
      }
      menus: settingsJson(fileRelativePath: { regex: "/menus/" }) {
        menus {
          name
          links {
            label
            path
          }
        }
      }
    }
  `);
  const Menu = useMemo(() => menu[sideMenuType], [sideMenuType]);
  const linkStyle = {
    color,
    fontSize,
  };

  return (
    <SideMenuContainer>
      <Menu
        isOpen={isMenuOpen}
        disableCloseOnEsc
        onStateChange={toggleMenu}
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
        {withLogo && logo && (
          <LogoWrapper>
            <Img fluid={logo.childImageSharp.fluid} />
          </LogoWrapper>
        )}
        {menus
          .find(({ name }) => name === 'main')
          ?.links.map(({ path, label }) => (
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
