const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/venue': { page: '/venue' },
      '/accessibility': { page: '/accessibility' },
      '/keynote': { page: '/keynote' },
      '/scholarships': { page: '/scholarships' },
      '/team': { page: '/team' }
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vrst2019/' : ''
});
