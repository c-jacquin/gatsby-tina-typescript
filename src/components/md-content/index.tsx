import { Global } from '@emotion/core';
import React, { CSSProperties } from 'react';
import { Converter } from 'showdown';

import { MdWrapper } from './styled';

const converter = new Converter();

interface MdContentProps {
  content: string;
  style: string;
  wrapperStyle?: CSSProperties;
}

const MdContent: React.FC<MdContentProps> = ({ content, style, wrapperStyle, ...props }) => (
  <>
    <Global styles={style} />
    <MdWrapper style={wrapperStyle} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
  </>
);

export default MdContent;
