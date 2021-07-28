/* eslint-disable */
const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
// WEBPACK OUTPUT PATHS
const APP_PATHS = {
  'entryAbs': path.join(__dirname, './resources/assets/js/app.js'),
  'publicAbs': path.join(__dirname, './public'),
  'public': '/public',
  'js': '[name].js',
  'css': '[name].css',
  'img': '[name].[ext]',
  'fonts': 'fonts/[name].[ext]',
};
// WEBPACK PLUGIN

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'resources/js'), 'node_modules'],
    extensions: ['.js', '.vue', '.json', '.ts'],
  },
  output: {
    path: APP_PATHS.publicAbs,
    filename: APP_PATHS.js,
  },
  module: {
    rules: [
      /* Parse JS and React files with Babel */
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        }],
      },
    ],
  },

  plugins: [
  ],

  /* Enable file watching based on NODE_ENV */
  watch: false,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000,
    ignored: /node_modules/,
  },
};
