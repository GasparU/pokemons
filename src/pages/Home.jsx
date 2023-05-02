import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'
import fondo from "../../public/header.png"
import "./styles/home.css"

const Home = () => {
    return (
        <div className='home__container'>
            <img className='home__img' src={fondo} />
            <h2 className='home__title'>Hi Trainer!</h2>
            <p className='home__text'>Please give us your trainer name to star</p>
            <FormNameUser />
        </div>
    )
}

export default Home