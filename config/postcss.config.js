// eslint-disable-next-line no-unused-vars
module.exports = ({ file, options, env }) => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
});
