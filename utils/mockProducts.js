/**
 * Crear un array de productos y exportarlo para 
 * que lo utilice la ruta /products de la carpeta /api.
 * 
 * Una vez creado, deberás ejecutar en consola el comando
 * `npm run test:unit:watch mockProducts.spec.js` y corroborar que
 * todos los tests estén pasando.
 */

let products = [
    {
        id: 1,
        title: 'Televisor',
        price: 200,
        description: 'Logitech',
        quantity: 3,
    },
    {
        id: 2,
        title: 'Celular',
        price: 150,
        description: 'Nokia',
        quantity: 6,
    },
    {
        id: 3,
        title: 'Audifonos',
        price: 80,
        description: 'Hiperx',
        quantity: 2,
    },
    {
        id: 4,
        title: 'Mouse',
        price: 30,
        description: 'Noga',
        quantity: 4,
    }
];

module.exports =  products;