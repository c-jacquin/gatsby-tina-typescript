import { Global } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';
import { useGlobalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import themeFormConfig from '../@cms/form/theme';
import normalize from '../styles/normalize';

const ThemeProvider: React.FC = ({ children }) => {
  const { themeJson } = useStaticQuery(graphql`
    query Theme {
      themeJson {
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
          heights {
            header
          }
          containerPadding
        }
      }
    }
  `);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [theme] = useGlobalJsonForm(themeJson, themeFormConfig) as any;

  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={normalize(theme)} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
