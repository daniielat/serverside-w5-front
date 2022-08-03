const React = require('react');

///Creamos la View y le pasamos los props *****
function View(props){
    const { title } = props; // Desestructurar las props

    return (
        <h2>{title}</h2>
    )
}


module.exports = View;