import { css } from '@emotion/core';

import { Theme } from '@typings/json';

function normalize({ colors, dimensions, fonts }: Theme) {
  return css`
    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    html {
      font-size: ${dimensions.fontSize.regular}px !important;
      line-height: ${dimensions.lineHeight.regular} !important;
    }

    body {
      width: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      font-family: ${fonts.sansSerif};
      color: ${colors.black};
      background-color: ${colors.ui.light};
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    a {
      text-decoration: none;
      outline: 0;

      & * {
        text-decoration: none;
      }
    }

    a:visited {
      * {
        color: ${colors.black};
      }
    }

    img {
      max-width: 100%;
      object-fit: contain;
      position: relative;
    }

    figure {
      margin: 2rem 0;
    }

    figcaption {
      font-size: 80%;
    }

    table {
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid ${colors.ui.light};
      font-size: 85%;
      border-collapse: collapse;
    }

    td,
    th {
      padding: 0.25rem 0.5rem;
      border: 1px solid ${colors.ui.light};
    }

    th {
      text-align: left;
    }

    tbody {
      tr {
        &:nth-of-type(odd) {
          td {
            background-color: ${colors.ui.whisper};
          }
          tr {
            background-color: ${colors.ui.whisper};
          }
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1.414rem;
      margin-bottom: 0.5rem;
      color: ${colors.black};
      font-weight: 600;
      line-height: ${dimensions.lineHeight.heading};
      text-rendering: optimizeLegibility;
    }

    h1 {
      margin-top: 0;
      font-size: ${dimensions.headingSizes.h1}rem;
    }

    h2 {
      font-size: ${dimensions.headingSizes.h2}rem;
    }

    h3 {
      font-size: ${dimensions.headingSizes.h3}rem;
    }

    h4,
    h5,
    h6 {
      font-size: ${dimensions.headingSizes.h4}rem;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    strong {
      color: ${colors.black};
    }

    ul,
    ol,
    dl {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    dt {
      font-weight: bold;
    }

    dd {
      margin-bottom: 0.5rem;
    }

    hr {
      position: relative;
      margin: 1.5rem 0;
      border: 0;
      border-top: 1px solid ${colors.ui.light};
    }

    blockquote {
      margin: 0.8rem 0;
      padding: 0.5rem 1rem;
      border-left: 0.25rem solid ${colors.ui.light};
      color: ${colors.gray.calm};

      p {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `;
}

export default normalize;
