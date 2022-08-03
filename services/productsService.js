/**
 * Ejercitación integradora:
 * En este archivo deberás crear el servicio.
 *
 ********************************************
 * Una vez creado, deberás correr el comando 
 * `npm run test:unit:watch products-service`
 * y corroborrar que pasen los tests.
 ********************************************
 */

 const restClient = require('nordic/restclient')({
    timeout:5000,
    // baseURL : 'https://api.mercadolibre.com'
 });

 class ServiceProduct{
    static getProducts(name, siteID, limit){
        // https://internal-api.mercadolibre.com - URL fija
        // sites/MLA/search?q=phone URL variable
        return restClient.get(`/sites/${siteID}/search?q=${name}&limit=${limit}`)
            .then(response => response.data.results)
            .catch(err => console.log(err))
    }
 }



 module.exports = ServiceProduct;