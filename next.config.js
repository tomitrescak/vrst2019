const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/venue': { page: '/venue' },
      '/submissions': { page: '/submissions' },
      '/accessibility': { page: '/accessibility' },
      '/keynote': { page: '/keynote' },
      '/scholarships': { page: '/scholarships' },
      '/team': { page: '/team' },
      '/visa': { page: '/visa' }
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vrst2019/' : ''
});
