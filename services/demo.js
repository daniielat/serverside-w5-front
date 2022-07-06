/**
 * Modules dependencies
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
  // BORRAR DESPUESS!!!!!!!
  baseURL: 'https://api.mercadolibre.com'
});

/**
 * Service interface
 */
class Service {
  static getSite(siteId) {
    return restclient.get(`/sites/${siteId}`)
      .then(response => response.data);
  };
}

/**
 * Expose Service
 */
module.exports = Service;
