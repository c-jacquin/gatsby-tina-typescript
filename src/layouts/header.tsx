/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm, useLocalJsonForm } from 'gatsby-tinacms-json';
import React, { useMemo } from 'react';

import headerForm from '../@cms/form/header';
import { HeaderContainer, Navbar, NavigationLink, HeaderLogo } from './styled';
import { getThumbnail } from '../helpers/thumbnail';

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
  const logoSrc = useMemo(() => {
    return getThumbnail(allFile.edges, logo);
  }, [logo, allFile.edges]);

  const linkStyle = {
    padding: `0 ${linkSpace}`,
    color,
    fontSize,
  };

  return (
    <HeaderContainer color={backgroundColor}>
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
