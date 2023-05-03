import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "./styles/pokeCard.css"
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ poke }) => {
    const [pokeDato, getPokemon] = useFetch(poke.url)

    useEffect(() => {
        getPokemon()
    }, [])

    const navigate = useNavigate()

    const handleId = e => {
        e.preventDefault()
        navigate(`/pokedex/${pokeDato?.name}`)
    }

    return (
        <div className='card__container__all'>

            <form className='card__container' onClick={handleId}>
                <div className={`card__fond bg-${pokeDato?.types[0].type.name}`}>
                    <img className='card_pokemon' src={pokeDato?.sprites.other["official-artwork"].front_default} />
                </div>
                <div className='card__title'>
                    <div className='card__info'>
                        <h1>{pokeDato?.name}</h1>
                        <p className='card__data'>Tipo</p>
                        <p className='card__data'>{pokeDato?.types[0].type.name} </p>
                    </div>
                    <div >
                        <div className='card__habilities'>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[0].stat.name.toUpperCase()}</p>
                                <p className='card__data'>{pokeDato?.stats[0].base_stat}</p>
                            </div>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[1].stat.name.toUpperCase()}</p>
                                <p className='card__data'>{pokeDato?.stats[1].base_stat}</p>
                            </div>
                        </div>
                        <div className='card__habilities'>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[2].stat.name.toUpperCase()}</p>
                                <p className='card__data'>{pokeDato?.stats[2].base_stat}</p>
                            </div>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[5].stat.name.toUpperCase()}</p>
                                <p className='card__data'>{pokeDato?.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PokeCard