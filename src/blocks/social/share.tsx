import { graphql } from 'gatsby';
import React from 'react';

import { AsideTitle } from '@components/title';
import SocialShareButtons from '@components/social-share';
import { SocialContainer } from './styled';

interface SocialSharingProps {
  facebook?: boolean;
  twitter?: boolean;
  email?: boolean;
  whatsapp?: boolean;
  flexAlign: string;
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialSharingProps> = ({ url, email, facebook, twitter, whatsapp, title, flexAlign }) => {
  return (
    <SocialContainer>
      {title && title !== '' && <AsideTitle>{title}</AsideTitle>}
      <SocialShareButtons flexAlign={flexAlign} url={url} display={{ email, facebook, twitter, whatsapp }} />
    </SocialContainer>
  );
};

export const SocialShareBlock = {
  label: 'Social share',
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
      label: 'twitter',
      name: 'twitter',
      component: 'toggle',
    },
    {
      label: 'email',
      name: 'email',
      component: 'toggle',
    },
    {
      label: 'whatsapp',
      name: 'whatsapp',
      component: 'toggle',
    },
    {
      label: 'url',
      description: '(optionnal, if specified will override the actual page url)',
      name: 'string',
      component: 'text',
    },
    {
      label: 'buttons alignment',
      name: 'flexAlign',
      component: 'select',
      options: ['flex-start', 'center', 'flex-end'],
    },
  ],
  defaultItem: {
    email: true,
    facebook: true,
    twitter: true,
    whatsapp: true,
    url: '',
    title: 'Social share',
    flexAlign: 'flex-start',
  },
};

export default SocialShare;

export const socialFragment = graphql`
  fragment SocialShareBlock on PagesJsonSections {
    facebook
    twitter
    email
    whatsapp
    url
    title
    flexAlign
  }
`;

export const socialColsFragment = graphql`
  fragment SocialShareColsBlock on PagesJsonSectionsCols {
    facebook
    twitter
    email
    whatsapp
    url
    title
    flexAlign
  }
`;
export const socialAsideFragment = graphql`
  fragment SocialShareAsideBlock on PagesJsonAside {
    facebook
    twitter
    email
    whatsapp
    url
    title
    flexAlign
  }
`;
