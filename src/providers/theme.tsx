import { Global } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import { heroField } from '@layout/hero';
import { headerField } from '@layout/header';
import { footerField } from '@layout/footer';
import normalize from '@styles/normalize';

const ThemeProvider: React.FC = ({ children }) => {
  const { themeJson } = useStaticQuery(graphql`
    query Theme {
      themeJson: settingsJson(fileRelativePath: { regex: "/theme/" }) {
        id
        fileRelativePath
        rawJson
        colors {
          primary
          secondary
          accent
          success
          warning
          code
          white
          black
          ui {
            bright
            light
            whisper
          }
          gray {
            dark
            calm
          }
        }
        fonts {
          sansSerif
          serif
          monospace
        }
        dimensions {
          breakpoints {
            xs
            sm
            md
            lg
            xl
          }
          widths {
            md
            lg
            xl
          }
          fontSize {
            regular
            large
          }
          headingSizes {
            h1
            h2
            h3
            h4
          }
          lineHeight {
            regular
            heading
          }
          containerPadding
        }
        header {
          color
          backgroundColor
          fontSize
          linkSpace
          opacity
          withLogo
          activeLinkColor
          height
          heightLg
        }
        footer {
          height
        }
        hero {
          display
          headline
          textline
          large
          display
          opacity
          image {
            childImageSharp {
              fluid(quality: 70, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const [theme] = useLocalJsonForm(themeJson, themeForm) as any;

  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={normalize(theme)} />
      {children}
    </EmotionThemeProvider>
  );
};

const themeForm = {
  label: 'Theme',
  fields: [
    {
      label: 'Colors',
      name: 'rawJson.colors',
      component: 'group',
      fields: [
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'ui.bright',
        'ui.light',
        'ui.whisper',
        'code',
        'gray.dark',
        'gray.calm',
        'white',
        'black',
      ].map(color => ({
        name: color,
        component: 'color',
        label: color,
        colorFormat: 'hex',
      })),
    },
    {
      label: 'Dimensions',
      name: 'rawJson.dimensions',
      component: 'group',
      fields: [
        'breakpoints.xs',
        'breakpoints.sm',
        'breakpoints.md',
        'breakpoints.lg',
        'breakpoints.xl',
        'widths.md',
        'widths.lg',
        'widths.xl',
        'fontSize.regular',
        'fontSize.large',
        'headingSizes.h1',
        'headingSizes.h2',
        'headingSizes.h3',
        'headingSizes.h4',
        'lineHeight.regular',
        'lineHeight.heading',
        'containerPadding',
      ].map(label => ({
        name: label,
        component: 'text',
        label: `Theme dimensions ${label}`,
      })),
    },
    {
      label: 'Fonts',
      component: 'group',
      name: 'rawJson.fonts',
      fields: ['sansSerif', 'serif', 'monospace'].map(label => ({
        name: label,
        component: 'text',
        label,
      })),
    },
    headerField,
    footerField,
    {
      label: 'Default blog post hero',
      ...heroField,
      fields: heroField.fields,
    },
    {
      label: 'Footer',
      name: 'rawJson.footer',
      component: 'group',
      fields: [],
    },
  ],
};

export default ThemeProvider;
