const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV == 'development';

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: (isDevelopment ? 'inline-source-map' : false),
  entry: './src/javascripts/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/javascripts')
  },
  module: {
    rules: [
      {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                plugins: [
                  isDevelopment && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          ],
      }
    ]
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}
