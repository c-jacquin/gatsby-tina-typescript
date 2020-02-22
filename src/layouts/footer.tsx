import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import Map from 'pigeon-maps';
import React from 'react';

import footerForm from '../@cms/form/globals/footer';
import { FooterContainer, FooterNavbar, FooterNavlink } from './styled';

const Footer: React.FC = () => {
  const { layoutJson, nav } = useStaticQuery(graphql`
    query Footer {
      layoutJson(fileRelativePath: { regex: "/footer/" }) {
        fileRelativePath
        rawJson
        id
        lat
        lng
        zoom
      }
      nav: layoutJson(fileRelativePath: { regex: "/header/" }) {
        fileRelativePath
        rawJson
        id
        links {
          path
          label
        }
      }
      allFile {
        ...FluidImg
      }
    }
  `);
  const [{ lat, lng, zoom }] = useGlobalJsonForm(layoutJson, footerForm) as any;
  const position = [lat, lng];

  return (
    <FooterContainer>
      <FooterNavbar>
        {nav.links.map(({ path, label }: any) => (
          <FooterNavlink to={path}>{label}</FooterNavlink>
        ))}
      </FooterNavbar>
      <Map center={position} zoom={zoom} />
    </FooterContainer>
  );
};

export default Footer;
