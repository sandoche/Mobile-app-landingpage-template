/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './_src/index.js',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './icon.png',
      manifest: './config/manifest.json',
    }),
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../_layouts/default.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        { from: path.resolve('_images'), to: 'images/', }
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1, url: false } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: 'config/postcss.config.js',
              }
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
