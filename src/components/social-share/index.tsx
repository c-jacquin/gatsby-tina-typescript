import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const SocialShareContainer = styled.div<{ flexAlign: string }>(({ flexAlign }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: flexAlign,
}));

interface SocialShareProps {
  url: string;
  display?: Record<string, boolean | undefined>;
  flexAlign?: string;
  style?: CSSProperties;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, display = {}, flexAlign = 'flex-start', style, className }) => (
  <SocialShareContainer flexAlign={flexAlign} style={style} className={className}>
    {display.facebook && (
      <FacebookShareButton url={url}>
        <FacebookIcon />
      </FacebookShareButton>
    )}
    {display.twitter && (
      <TwitterShareButton url={url}>
        <TwitterIcon />
      </TwitterShareButton>
    )}
    {display.email && (
      <EmailShareButton url={url}>
        <EmailIcon />
      </EmailShareButton>
    )}
    {display.whatsapp && (
      <WhatsappShareButton url={url}>
        <WhatsappIcon />
      </WhatsappShareButton>
    )}
  </SocialShareContainer>
);

export default SocialShare;
