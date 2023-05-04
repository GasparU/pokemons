import React from 'react'
import imagen from "../../../public/error.png"
import "./styles/error.css"

const Error = () => {
    return (
        <div className='error'>
            <div className='box'>
                <div className='error__text'>Lo siento, debes ingresar solo nombres de pokemones</div>
                <img className='image' src={imagen} />
            </div>
        </div>
    )
}

export default Error