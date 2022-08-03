const React = require('react');
const View = require('./view');
const Service = require('../../../services/productsService');

exports.serviceProducts = function serviceProducts(req, res, next){
    Service.getProducts('tablet', req.platform.siteID)
        .then(data => {
            res.locals.products = data;
            next()
        })
        .catch(err => next(err))
};

exports.render = function render(req, res){

    const Home = props => <View {...props} />

    res.render(Home, {
        message: 'Hello World',
        products: res.locals.products
    })
}
//