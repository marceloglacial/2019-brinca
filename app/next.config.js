const withCSS = require('@zeit/next-sass');
module.exports = withCSS({
    cssModules: false,
    target: 'serverless'
});
