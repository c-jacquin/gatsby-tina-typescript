const path = require('path');

const SITE_URL = 'http://cameroonmusicbusiness.com';
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    siteUrl: SITE_URL,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'assets', 'images'),
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-tinacms-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'data'),
        name: 'data',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: IS_PROD,
          position: 'displace',
        },
        plugins: [
          {
            resolve: 'gatsby-tinacms-git',
            options: {
              pathToRepo: __dirname,
              defaultCommitMessage: 'chore(cms): Edited with TinaCMS',
              defaultCommitName: 'TinaCMS',
              defaultCommitEmail: 'git@tinacms.org',
              pushOnCommit: false,
            },
          },
        ],
      },
    },
  ],
};
