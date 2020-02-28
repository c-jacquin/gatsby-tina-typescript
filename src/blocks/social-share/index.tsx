import styled from '@emotion/styled';
import React from 'react';

import SocialShareButtons from '@components/social-share';
import { graphql } from 'gatsby';

interface SocialSharingProps {
  facebook?: boolean;
  twitter?: boolean;
  email?: boolean;
  whatsapp?: boolean;
  flexAlign: string;
  url: string;
  title: string;
}

const SocialShareContainer = styled.div({
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
});

const SocialShareTitle = styled.div({
  fontWeight: 'bold',
  fontSize: '1.2em',
  alignSelf: 'center',
  marginBottom: '5px',
});

const SocialShare: React.FC<SocialSharingProps> = ({ url, email, facebook, twitter, whatsapp, title, flexAlign }) => {
  return (
    <SocialShareContainer>
      {title && title !== '' && <SocialShareTitle>{title}</SocialShareTitle>}
      <SocialShareButtons flexAlign={flexAlign} url={url} display={{ email, facebook, twitter, whatsapp }} />
    </SocialShareContainer>
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
