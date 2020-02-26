import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { transparentize } from 'polished';
import React, { useContext, useMemo } from 'react';
import { slide, bubble, elastic, fallDown, push, pushRotate, reveal, scaleDown, scaleRotate, stack } from 'react-burger-menu';

import { Menus, Theme } from '@typings/json';
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
  const { isMenuOpen } = useContext(MenuContext);
  const {
    settingsJson: {
      header: { color, backgroundColor, fontSize, mobileLogo, withLogo, activeLinkColor, sideMenuType },
    },
    menus: { menus },
  } = useStaticQuery<{ settingsJson: Theme; menus: Menus }>(graphql`
    query SideMenu {
      settingsJson(fileRelativePath: { regex: "/theme/" }) {
        header {
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
        {withLogo && mobileLogo && (
          <LogoWrapper>
            <Img fluid={mobileLogo.childImageSharp.fluid} />
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
