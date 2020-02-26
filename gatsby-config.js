const path = require('path');
const { title, siteUrl, description } = require('./content/settings/site.json');
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title,
    siteUrl,
    description,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-tinacms-json',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout/site.tsx'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'content', 'assets', 'images'),
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'content', 'settings'),
        name: 'settings',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'content', 'blog'),
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'content', 'pages'),
        name: 'pages',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 880,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: IS_PROD,
          position: 'displace',
        },
        plugins: [
          'gatsby-tinacms-remark',
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
    {
      resolve: `gatsby-plugin-sitemap`,
      // options: {
      //   output: `/sitemap.xml`,
      //   // Exclude specific pages or groups of pages using glob parameters
      //   // See: https://github.com/isaacs/minimatch
      //   // The example below will exclude the single `path/to/page` and all routes beginning with `category`
      //   exclude: ['/elements'],
      //   query: `
      //   {
      //     site {
      //       siteMetadata {
      //         siteUrl
      //       }
      //     }
      // }`,
      // },
    },
  ],
};
