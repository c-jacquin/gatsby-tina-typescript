import { Global } from '@emotion/core';
import React, { CSSProperties } from 'react';
import { Converter } from 'showdown';

import { MdWrapper } from './styled';

const converter = new Converter();

interface MdContentProps {
  markdown: string;
  style: string;
  wrapperStyle?: CSSProperties;
}

const MdContent: React.FC<MdContentProps> = ({ markdown, style, wrapperStyle }) => (
  <>
    <Global styles={style} />
    <MdWrapper style={wrapperStyle} dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />
  </>
);

export default MdContent;
