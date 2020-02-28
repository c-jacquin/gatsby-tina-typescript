import { useTheme } from 'emotion-theming';
import React, { CSSProperties } from 'react';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import { Theme } from '@typings/theme';
import { SocialButtons, SocialIconButton } from './styled';

interface SocialShareProps {
  url: string;
  display?: Record<string, boolean | undefined>;
  flexAlign?: string;
  style?: CSSProperties;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, display = {}, flexAlign = 'flex-start', style, className }) => {
  const theme = useTheme<Theme>();

  return (
    <SocialButtons flexAlign={flexAlign} style={style} className={className}>
      {display.facebook && (
        <FacebookShareButton url={url}>
          <SocialIconButton backgroundColor={theme.social.facebook}>
            <FaFacebook />
          </SocialIconButton>
        </FacebookShareButton>
      )}
      {display.twitter && (
        <TwitterShareButton url={url}>
          <SocialIconButton backgroundColor={theme.social.twitter}>
            <FaTwitter />
          </SocialIconButton>
        </TwitterShareButton>
      )}
      {display.email && (
        <EmailShareButton url={url}>
          <SocialIconButton backgroundColor={theme.colors.secondary}>
            <FaEnvelope />
          </SocialIconButton>
        </EmailShareButton>
      )}
      {display.whatsapp && (
        <WhatsappShareButton url={url}>
          <SocialIconButton backgroundColor={theme.social.whatsapp}>
            <FaWhatsapp />
          </SocialIconButton>
        </WhatsappShareButton>
      )}
    </SocialButtons>
  );
};

export default SocialShare;
