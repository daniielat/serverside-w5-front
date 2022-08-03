const React = require('react');
const View = require('./view');

exports.render = function render ( req, res) {

    // Creamos el componente Home2 para pasarle las props a la View
     const Home2 = props => <View {...props} />
     
     res.render(Home2, {
        title: "First page"
     })
}