const routes = require('next-routes');

// Setup router.
module.exports = routes()
    .add('index', '/')
    .add('posts')
    .add('pages')
    .add('single', '/eventos/:slug')
    .add('page', '/:slug');
