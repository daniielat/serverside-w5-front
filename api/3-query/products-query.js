const router = require('nordic/ragnar').router();

/**
Ejercicio 3 - Query

let products = [
    {
        name: "Mouse",
        price: 4598,
        stock: 30,
    },
    {
        name: "Notebook",
        price: 2598,
        stock: 30,
    },
    {
        name: "Macbook",
        price: 9898,
        stock: 0,
    },
];

Utilizando el array de productos detallado arriba, vamos a implementar
un endpoint en nuestra app que nos permita filtrar los productos según 
los siguientes criterios recibidos por query:

1. Nombre: nos devolverá los productos cuyo nombre contenga el texto que 
pasamos por parámetro (QueryString).

2. Precio: Nos devolverá los productos cuyo precio se encuentre dentro del 
rango definido por parámetro (QueryString).

3. Stock: Nos devolverá sólo los productos que tienen stock.

NOTA: Estar atentos a los res.json y los bloques if/else. Para estar seguros, 
ponerle un return a cada res.json o corroborar que no quede ningún res fuera 
de un if/else.

********************************************************
Despues de implementar el código, correr el comando 
`npm run test:unit:watch products-query-route` y comprobar 
que pasan todos los tests.
********************************************************/


let products = [
    {
        name: "Mouse",
        price: 4598,
        stock: 30,
    },
    {
        name: "Notebook",
        price: 2598,
        stock: 30,
    },
    {
        name: "Macbook",
        price: 9898,
        stock: 0,
    },
];

// La información viaja por query
// https://dev.mercadolibre.com.ar:8443/api/products-query?id=400&name
// El signo ? indica que lo que viene después son los parámetros
router.get('/', (req, res) => {
    const { name, minPrice, maxPrice} = req.query;
    const filterDB = products.filter(product => product.stock > 0);
    if (filterDB.length === 0){
        res.json('No se encontraron productos')
    } else {
        if (!name && !minPrice && !maxPrice){
            res.json(filterDB)
        } else {
            const filterName = filterDB.filter(product => product.name === name);
            if (filterName.length === 0){
                res.json('No se encontraron productos')
            } else {
                console.log('aaaaaaaaaaaa', filterName)
                res.json(filterName)
            }
        }
    }
})

router.get('/', (req,res) => {
    const { minPrice, maxPrice } = req.query;
    const filterPrice = products.filter(product => {
        if (product.price >= minPrice && product.price <= maxPrice){
            product
        }
    })
    if (filterPrice.length === 0) {
        res.json('No se encontraron productos')
    } else {
        res.json(filterPrice);
    }
})

// La información viaja por params y es obligatoria ya que no lleva el ?
/* router.get('/:id/:name', (req, res) => {
    const { id, name } = req.params;
    res.json({id, name});
}) */

module.exports = router;