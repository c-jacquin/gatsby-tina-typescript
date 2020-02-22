/* eslint-disable react/no-array-index-key */
import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import footerForm from '../@cms/form/globals/footer';
import Row from '../components/row';
import { FooterContainer, FooterNavbar, FooterNavlink } from './styled';

const Footer: React.FC = () => {
  const { layoutJson, nav } = useStaticQuery(graphql`
    query Footer {
      layoutJson(fileRelativePath: { regex: "/footer/" }) {
        fileRelativePath
        rawJson
        id
        rows {
          _template
          hpadding
          vpadding
          hmargin
          vmargin
          cols {
            _template
            hpadding
            vpadding
            hmargin
            vmargin
            width
            title
            lat
            lng
            zoom
            flex
            markdown
            style
            height
            submitLabel
            fields {
              name
              type
              required
              label
              fieldErrorMessage
            }
          }
        }
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
  const [values] = useGlobalJsonForm(layoutJson, footerForm) as any;

  return (
    <FooterContainer>
      <FooterNavbar>
        {nav.links.map(({ path, label }: any) => (
          <FooterNavlink to={path}>{label}</FooterNavlink>
        ))}
      </FooterNavbar>
      {values.rows &&
        values.rows.filter(({ _template }: any) => _template !== 'Setup').map((row: any, idx: number) => <Row {...row} key={idx} />)}
    </FooterContainer>
  );
};

export default Footer;
