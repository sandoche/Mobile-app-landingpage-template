/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Mobile App Name',
      short_name: 'Mobile App Name',
      description: 'A super tagline for the mobile app',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#efeeff',
      background_color: '#efeeff',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
