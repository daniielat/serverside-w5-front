const React = require('react');
const View = require('./view');
const Service = require('../../../services/productsService')

exports.fetchProducts = function fetchProducts(req, res, next){
    const {name, limit, siteID} = req.platform;
    Service.getProducts(name, siteID, limit)
        .then(data => {
            res.locals.products = data;
            next()
        })
        .catch(err => console.log(err))
}

exports.render = function render(req, res) {
    const Products = props => <View {...props} />
    res.render(Products,{
        products: res.locals.products,
    })
}
