const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const { blogPrefix } = require('./content/settings/site.json');

module.exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  config.resolve = {
    ...config.resolve,
    plugins: [...config.resolve.plugins, new TsconfigPathsPlugin({ configFile: path.join(__dirname, 'tsconfig.json') })],
  };

  config.plugins = [
    ...config.plugins,
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ['css'],
    }),
    new webpack.DefinePlugin({
      ['process.env.NODE_ENV']: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ];

  actions.replaceWebpackConfig(config);
};

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx');
  const pageTemplate = path.resolve('src/templates/page.tsx');

  const result = await graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      pages: allPagesJson(filter: { path: { ne: "" } }) {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.blogPosts.edges.forEach(({ node }) => {
    createPage({
      path: blogPrefix + node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.path,
      },
    });
  });

  result.data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: pageTemplate,
      context: {},
    });
  });
};

exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
  const { createNode, createNodeField, createParentChildLink } = actions;

  if (node.internal.type === `PagesJson`) {
    if (node.sections) {
      const markdownHost = {
        id: createNodeId(`${node.id} markdown host`),
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(JSON.stringify(node.sections)),
          type: `${node.internal.type}MarkdownData`,
        },
      };

      createNode(markdownHost);

      createNodeField({
        node,
        name: `markdownContent___NODE`, // Before the ___NODE: Name of the new fields
        value: markdownHost.id, // Connects both nodes
      });

      node.sections.forEach((block, i) => {
        if (!block.content) {
          block.content = '';
        }
        const blockNode = {
          id: `${node.id} block ${i} markdown`,
          parent: markdownHost.id,
          internal: {
            content: block.content,
            contentDigest: createContentDigest(block.content),
            type: `${node.internal.type}BlockMarkdown`,
            mediaType: 'text/markdown',
          },
        };

        createNode(blockNode);

        createParentChildLink({ parent: node, child: blockNode });
      });
    }

    // transform markdown in node.content
    if (node.content) {
      const textNode = {
        id: createNodeId(`${node.id} markdown field`),
        children: [],
        parent: node.id,
        internal: {
          content: node.content,
          mediaType: `text/markdown`, // Important!
          contentDigest: createContentDigest(node.content),
          type: `${node.internal.type}Markdown`,
        },
      };

      createNode(textNode);

      // Add link to the new node
      createNodeField({
        node,
        name: `markdownContent___NODE`, // Before the ___NODE: Name of the new fields
        value: textNode.id, // Connects both nodes
      });
    }
  }
};

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type PagesJson implements Node @dontInfer {
//       title: String!
//       message: String!
//       link: String!
//       sections: PagesJsonSections
//       aside: PagesJsonAside
//     }

//     type PagesJsonSections {
//       _template: String
//       style: String!
//       content: String!
//       image: String!
//       parallax: String!
//       height: String!
//       title: String!
//       titleColor: String!
//       align: String!
//       color: String!
//       margin: String!
//       tag: String!
//       opacity: Float!
//       apiUrl: String!
//       fieldErrorMessage: String!
//       errorMessage: String!
//       successMessage: String!
//       submitLabel: String!
//       fields: Fields
//     }

//     type PagesJsonAside {
//       _template: String
//       apiUrl: String!
//       title: String!
//       fieldErrorMessage: String!
//       errorMessage: String!
//       successMessage: String!
//       submitLabel: String!
//       fields: Fields
//     }

//     type Fields {
//       type: String!
//       name: String!
//       label: String!
//       fieldErrorMessage: String!
//       required: Boolean!
//     }
//   `;
//   createTypes(typeDefs);
// };
