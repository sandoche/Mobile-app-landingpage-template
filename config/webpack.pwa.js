/* eslint-disable import/no-extraneous-dependencies */
const { merge: Merge } = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');

module.exports = Merge(ProdConfig, {});
