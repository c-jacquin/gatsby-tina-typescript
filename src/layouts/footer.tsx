// import { graphql, useStaticQuery } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import Map from 'pigeon-maps';
import React from 'react';

import footerForm from '../@cms/form/footer';
import { FooterContainer } from './styled';

const Footer: React.FC = () => {
  const { layoutJson } = useStaticQuery(graphql`
    query Footer {
      layoutJson(fileRelativePath: { regex: "/header/" }) {
        fileRelativePath
        rawJson
        id
        lat
        lng
        zoom
      }
      allFile {
        ...FluidImg
      }
    }
  `);
  const [{ lat, lng, zoom }] = useLocalJsonForm(layoutJson, footerForm) as any;
  const position = [lat || 45, lng || 10];

  console.log(position, zoom);
  return (
    <FooterContainer>
      <div>Footer</div>
      <Map center={[50.879, 4.6997]} zoom={12} width={300} height={200} />
    </FooterContainer>
  );
};

export default Footer;
