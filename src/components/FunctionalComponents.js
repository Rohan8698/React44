import React from 'react'
import './myStyles.css'

function FunctionalComponent(props) {
    console.log(props);
    let className = props.apply ? 'heading' : '';
    let inline = {
        color: 'Red',
        fontSize: '200px'
    }

    return (
        <div>
            <h1 style={inline}>Welcome to MRU {props.city}, {props.state}</h1>
            {props.children}
        </div>
    )
}

export default FunctionalComponent
