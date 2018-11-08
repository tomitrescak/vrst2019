const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/venue': { page: '/venue' }
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vrst2019/' : ''
});
