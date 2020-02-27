import 'modern-normalize';

import { useStaticQuery, graphql } from 'gatsby';
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';
import { useLocalJsonForm, useGlobalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { withPlugin } from 'tinacms';

import { imageField } from '@blocks/image';
import ThemeProvider from '@providers/theme';
import { MenuProvider } from '@providers/menu';
import { heroField } from '@layout/hero';
import Header from '@layout/header';
import SideMenu from '@layout/menu';
import { Menu } from '@typings/menu';
import { Root } from './styled';

interface MasterProps {
  title?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
}

const MasterLayout: React.FC<MasterProps> = ({ children }) => {
  const { menus, site } = useStaticQuery(graphql`
    query Settings {
      menus: settingsJson(fileRelativePath: { regex: "/menus/" }) {
        rawJson
        id
        fileRelativePath
        menus {
          name
          links {
            path
            label
          }
        }
      }
      site: settingsJson(fileRelativePath: { regex: "/site/" }) {
        rawJson
        id
        fileRelativePath
        title
        description
        keywords {
          label
        }
        siteUrl
        blogPrefix
      }
    }
  `);
  useLocalJsonForm(menus, menusForm);
  useGlobalJsonForm(site, siteForm);

  return (
    <ParallaxProvider>
      <ThemeProvider>
        <MenuProvider>
          <Root id="root">
            <Header />
            <SideMenu />
            {children}
          </Root>
        </MenuProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

const menusForm = {
  label: 'Menus',
  fields: [
    {
      label: 'Menus',
      name: 'rawJson.menus',
      component: 'group-list',
      fields: [
        {
          label: 'menu name',
          name: 'name',
          component: 'text',
        },
        {
          label: 'Navigation Links',
          name: 'links',
          component: 'group-list',
          itemProps: (item: { label: string; path: string }, idx: number) => ({
            key: idx,
            label: item.label,
            path: item.path,
          }),
          defaultItem: () => ({
            label: 'a page',
            path: '/a-page',
          }),
          fields: [
            {
              label: 'displayd text',
              name: 'label',
              component: 'text',
            },
            {
              label: 'Link url',
              name: 'path',
              component: 'text',
            },
          ],
        },
      ],
      itemProps: ({ name, ...menu }: Menu, idx: number) => ({
        key: idx,
        label: name,
        ...menu,
      }),
      defaultItem: () => ({
        name: 'main',
        link: [
          {
            label: 'a page',
            path: '/a-page',
          },
        ],
      }),
    },
  ],
};

const siteForm = {
  label: 'Site',
  fields: [
    {
      label: 'Title',
      name: 'rawJson.title',
      component: 'text',
    },
    {
      label: 'App name',
      name: 'rawJson.appName',
      component: 'text',
    },
    {
      label: 'Description',
      name: 'rawJson.description',
      component: 'text',
    },
    {
      label: 'Site url',
      name: 'rawJson.siteUrl',
      component: 'text',
    },
    {
      ...imageField,
      label: 'Logo',
      name: 'logo',
      description: 'Your logo',
      component: 'image',
    },
    {
      label: 'Keywords',
      name: 'rawJson.keywords',
      description: 'A list of keywords corresponding to your site (not used by search engine)',
      component: 'group-list',
      itemProps: (item: { label: string }, idx: number) => ({
        key: idx,
        label: item.label,
      }),
      defaultItem: () => ({
        label: 'enter your keyword',
      }),
      fields: [
        {
          label: 'Keyword',
          name: 'label',
          component: 'text',
        },
      ],
    },
    {
      label: 'Blog prefix',
      name: 'rawJson.blogPrefix',
      description: 'prefix used before your blog page (must start with a /)',
      component: 'text',
    },
    {
      label: 'Rss feed title',
      name: 'rawJson.rssTitle',
      component: 'text',
    },
  ],
};

const BlogPostCreator = new RemarkCreatorPlugin({
  label: 'Nouvelle Action',
  fields: [
    { name: 'title', label: 'Titre', component: 'text', required: true },
    {
      name: 'image',
      label: 'Image',
      component: 'image',
      uploadDir: () => {
        return '/content/assets/images/';
      },
      required: true,
      ...imageField,
    },
    { name: 'city', label: 'Ville', component: 'text', required: true },
    { name: 'place', label: 'Salle de concert', component: 'text', required: true },
    { name: 'date', label: 'Date', component: 'date', required: true },
  ],
  filename: form => {
    const slug = form.title.replace(/\s+/, '-').toLowerCase();

    return `content/blog/${slug}.md`;
  },
  frontmatter: form => ({
    ...form,
    path: `/${form.title.replace(/\s+/, '-').toLowerCase()}`,
    ownHero: true,
  }),
});

const PageCreator = new RemarkCreatorPlugin({
  label: 'Nouvelle Page',
  fields: [
    { name: 'label', label: 'Label', component: 'text', required: true },
    { name: 'path', label: 'Path', component: 'text', required: true },
    { name: 'layout', label: 'Layout', component: 'select', options: ['1col', '2col', 'paper'], required: true },
    { name: 'hasFooter', label: 'has Footer ?', component: 'toggle', required: true },
    heroField,
  ],
  filename: form => {
    const slug = form.title.replace(/\s+/, '-').toLowerCase();

    return `content/pages/${slug}.json`;
  },
  frontmatter: form => ({
    ...form,
    path: form.path || `/${form.label.replace(/\s+/, '-').toLowerCase()}`,
    sections: [],
    aside: form.layout === '2col' ? [] : null,
    seo: {
      appName: '',
      author: '',
      copyright: '',
      description: '',
      keywords: [
        {
          label: 'keyword',
        },
      ],
      title: '',
      facebook: {
        description: '',
        image: '../assets/images/logo-big.png',
        title: '',
        type: 'article',
        url: '',
      },
      twitter: {
        card: 'summary',
        description: '',
        image: '../assets/images/logo-big.png',
        title: '',
      },
    },
  }),
});

export default withPlugin(MasterLayout, [BlogPostCreator, PageCreator]);
