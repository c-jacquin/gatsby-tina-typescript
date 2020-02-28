import { useTheme } from 'emotion-theming';
import { graphql } from 'gatsby';
import React from 'react';
import { FaRss, FaFacebook, FaTwitter } from 'react-icons/fa';

import { AsideTitle } from '@components/title';
import { SocialIconButton, SocialButtons } from '@components/social-share/styled';
import { Theme } from '@typings/theme';
import { SocialContainer } from './styled';

interface SocialProps {
  title: string;
  twitter: boolean;
  facebook: boolean;
  rss: boolean;
  twitterUrl?: string;
  facebookUrl?: string;
  flexAlign: string;
}

const Social: React.FC<SocialProps> = ({ facebook, title, rss, twitter, twitterUrl, facebookUrl, flexAlign }) => {
  const theme = useTheme<Theme>();

  return (
    <SocialContainer>
      {title && <AsideTitle>{title}</AsideTitle>}
      <SocialButtons flexAlign={flexAlign}>
        {facebook && !!facebookUrl && (
          <SocialIconButton href={facebookUrl} target="_blank" backgroundColor={theme.social.facebook}>
            <FaFacebook color="#fff" />
          </SocialIconButton>
        )}
        {twitter && twitterUrl && (
          <SocialIconButton href={twitterUrl} target="_blank" backgroundColor={theme.social.twitter}>
            <FaTwitter color="#fff" />
          </SocialIconButton>
        )}
        {rss && (
          <SocialIconButton href="/rss.xml" target="_blank" backgroundColor={theme.colors.secondary}>
            <FaRss color="#fff" />
          </SocialIconButton>
        )}
      </SocialButtons>
    </SocialContainer>
  );
};

export default Social;

export const SocialBlock = {
  label: 'Social',
  fields: [
    {
      label: 'title',
      name: 'title',
      component: 'text',
    },
    {
      label: 'facebook',
      name: 'facebook',
      component: 'toggle',
    },
    {
      label: 'facebook page url',
      name: 'facebookUrl',
      component: 'text',
    },
    {
      label: 'twitter',
      name: 'twitter',
      component: 'toggle',
    },
    {
      label: 'twitter page url',
      name: 'twitterUrl',
      component: 'text',
    },
    {
      label: 'rss',
      name: 'rss',
      component: 'toggle',
    },
    {
      label: 'buttons alignment',
      name: 'flexAlign',
      component: 'select',
      options: ['flex-start', 'center', 'flex-end'],
    },
  ],
  defaultItem: {
    rss: true,
    facebook: true,
    twitter: true,
    facebookUrl: '',
    twitterUrl: '',
    title: 'Social',
    flexAlign: 'flex-start',
  },
};

export const socialFragment = graphql`
  fragment SocialBlock on PagesJsonSections {
    facebook
    twitter
    rss
    url
    title
    flexAlign
    facebookUrl
    twitterUrl
  }
`;

export const socialColsFragment = graphql`
  fragment SocialColsBlock on PagesJsonSectionsCols {
    facebook
    twitter
    rss
    url
    title
    flexAlign
    facebookUrl
    twitterUrl
  }
`;

export const socialAsideFragment = graphql`
  fragment SocialAsideBlock on PagesJsonAside {
    facebook
    twitter
    rss
    url
    title
    flexAlign
    facebookUrl
    twitterUrl
  }
`;
