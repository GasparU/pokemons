import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import "./styles/pokedex.css"
import header from "../../public/header.png";

const Pokedex = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

    const { trainerName } = useSelector(state => state)
    const getStyle = () => {
        return JSON.parse(localStorage.getItem("style")) || false
    }
    const [style, setStyle] = useState(getStyle())
    const [fornUrl, setFormUrl] = useState(urlBase)

    useEffect(() => {
        localStorage.setItem("style", JSON.stringify(style))
    }, [style])

    const handleActive = () => {
        setStyle(!style)
    }
    return (
        <div className={`container_div ${style}`}>
            <div className='pokedex_fond'>
                <div className='pokedex_fond1'>
                </div>
                <div className='pokedex_fond2'>

                </div>
                <span id="toggle" onClick={handleActive} className={`  btn__toggle ${style}`} >
                    <i className='indicator'></i>
                </span>
                <img className='pokedex__header' src={header} />
            </div>
            <div className='pokedex__title'>
                <div className='pokedex__title-text'>
                    <p ><span className='pokedex__title1'>Welcome {trainerName} </span><span className={`pokedex__title2  ${style}`}>here you can find your favorite pokemon</span></p>

                </div>
                <FormPoke setFormUrl={setFormUrl} urlBase={urlBase} setCurrentPage={setCurrentPage} />
            </div>
            <PokeContainer style={style}

                fornUrl={fornUrl}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Pokedex