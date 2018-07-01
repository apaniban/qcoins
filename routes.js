const routes = require('next-routes')();

routes
  .add('/partners/:address', '/partners/show')
  .add('/partners/:address/products/:productId', '/partners/products/show')

module.exports = routes;
