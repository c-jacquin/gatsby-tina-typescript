import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Menus } from '@typings/menu';
import { FooterContainer, FooterNavbar, FooterNavlink } from './styled';

const Footer: React.FC = () => {
  const {
    menus: { menus },
  } = useStaticQuery<{ menus: Menus }>(graphql`
    query Footer {
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

  return (
    <FooterContainer>
      <FooterNavbar>
        {menus
          .find(({ name }) => name === 'footer')
          ?.links.map(({ path, label }) => (
            <FooterNavlink to={path} key={path}>
              {label}
            </FooterNavlink>
          ))}
      </FooterNavbar>
    </FooterContainer>
  );
};

export default Footer;

export const footerField = {
  label: 'Footer',
  component: 'group',
  name: 'rawJson.footer',
  fields: [
    {
      label: 'height',
      name: 'height',
      component: 'slider',
      step: 1,
      min: 0,
      max: 300,
    },
  ],
};
