const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  config.plugins = [
    ...config.plugins,
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ['css'],
    }),
  ];

  actions.replaceWebpackConfig(config);
};
