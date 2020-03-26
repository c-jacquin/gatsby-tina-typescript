const path = require('path');
const { title, siteUrl, description, appName, blogPrefix, rssTitle, logo } = require('./content/settings/site.json');
const { colors } = require('./content/settings/theme.json');
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title,
    siteUrl,
    description,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: colors.primary,
      },
    },
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
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'content/assets/images',
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
              defaultCommitName: process.env.AUTHOR_NAME,
              defaultCommitEmail: process.env.GIT_AUTHOR_EMAIL,
              pushOnCommit: true,
              sshKey: process.env.SSH_KEY,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
            settings: settingsJson(fileRelativePath: { regex: "/site/" }) {
              blogPrefix
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: {
                site,
                allMarkdownRemark,
                settings: { blogPrefix },
              },
            }) => {
              return allMarkdownRemark.edges
                .filter(({ node }) => !!node.frontmatter.path)
                .map((edge) => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + (blogPrefix || '') + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + (blogPrefix || '') + edge.node.frontmatter.path,
                    custom_elements: [{ 'content:encoded': edge.node.html }],
                  });
                });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: rssTitle,
            match: blogPrefix ? `^$${blogPrefix}/` : undefined,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: appName,
        start_url: '/',
        background_color: colors.secondary,
        theme_color: colors.primary,
        display: 'standalone',
        icon: `./content${logo.replace('..', '')}`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
