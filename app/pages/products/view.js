const React = require('react');

function View(props){
    const { products } = props;

    return (
        <ul>
            {
                products.length > 0 && products.map(product => <li>{product.title}</li>)
            }
        </ul>
    )

}

module.exports = View;