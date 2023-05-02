import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import "./styles/pokedex.css"
import header from "../../public/header.png";


const Pokedex = () => {
    const url2 = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

    const [fornUrl, setFormUrl] = useState(url2)

    // const urlRandom = valueType ? `/type/${valueType}` : "/pokemon?limit=100000&offset=0"

    // const url = `https://pokeapi.co/api/v2${urlRandom}`

    // const [pokeCard, getpokemon] = useFetch(`${url}`)

    // useEffect(() => {
    //     getpokemon()
    // }, [])


    const { trainerName } = useSelector(state => state)

    return (
        <div className='container_div'>
            <div className='pokedex_fond'>
                <div className='pokedex_fond1'></div>
                <div className='pokedex_fond2'></div>
                <img className='pokedex__header' src={header} />
            </div>
            <div className='pokedex__title'>
                <p><span className='pokedex__title1'>Welcome {trainerName} </span><span className='pokedex__title2'>here you can find your favorite pokemon</span></p>
                <FormPoke setFormUrl={setFormUrl} url2={url2} />
            </div>
            <PokeContainer
                // pokeCard={pokeCard}
                fornUrl={fornUrl}
            />
        </div>
    )
}

export default Pokedex