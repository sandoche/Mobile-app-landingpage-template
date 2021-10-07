module.exports = function getWebpackConfig(env) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(`./config/webpack.${env.config}.js`);
};
