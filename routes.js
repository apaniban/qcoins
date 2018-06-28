const routes = require('next-routes')();

routes
  .add('/partners', '/partners/index')
  .add('/partners/new', '/partners/new')
  .add('/partners/:address', '/partners/show')
  .add('/partners/:address/products', '/partners/products/index')
  .add('/partners/:address/products/new', '/partners/products/new');

module.exports = routes;
