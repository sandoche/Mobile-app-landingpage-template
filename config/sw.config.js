module.exports = {
  swDest: '_site/service-worker.js',
  globPatterns: [
    'assets/**.css',
    '**.html',
    '**/**.html',
    'assets/images/**.*',
    'assets/**.js',
  ],
  modifyURLPrefix: {
    '_site/': '',
  },
  runtimeCaching: [{
    urlPattern: '/',
    handler: 'NetworkFirst',
  }],
  globDirectory: '_site',
};
