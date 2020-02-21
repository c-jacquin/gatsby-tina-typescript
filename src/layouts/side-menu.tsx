import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { transparentize } from 'polished';
import React, { useContext, useMemo } from 'react';
import { slide, bubble, elastic, fallDown, push, pushRotate, reveal, scaleDown, scaleRotate, stack } from 'react-burger-menu';

import { getThumbnail } from '../@cms/helpers/thumbnail';
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
    layoutJson: { color, backgroundColor, fontSize, mobileLogo, withLogo, activeLinkColor, links, sideMenuType },
    allFile,
  } = useStaticQuery(graphql`
    query SideMenu {
      layoutJson(fileRelativePath: { regex: "/header/" }) {
        color
        backgroundColor
        fontSize
        mobileLogo
        withLogo
        activeLinkColor
        links {
          path
          label
        }
        sideMenuType
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
  const Menu = useMemo(() => menu[sideMenuType], [sideMenuType]);
  const logoSrc = useMemo(() => getThumbnail(allFile.edges, mobileLogo), [allFile.edges, mobileLogo]);
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
