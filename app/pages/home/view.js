const React = require('react');

function View (props) {
    const { message , products} = props;

    return (
        <>
            {
                products.length > 0 && products.map(product => product.title)
            }
        </>
    )
}

//
module.exports = View;