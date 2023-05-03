import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "./styles/pokeCard.css"
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ poke, style }) => {
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

            <form className={`card__container ${style} color-${pokeDato?.types[0].type.name}`} onClick={handleId}>
                <header className={`card__fond bg-${pokeDato?.types[0].type.name}`}>
                    <img className='card_pokemon' src={pokeDato?.sprites.other["official-artwork"].front_default} />
                </header>
                <div className='card__title'>
                    <div className='card__info'>
                        <h1 className={`card__title-name color-${pokeDato?.types[0].type.name}`}>{pokeDato?.name}</h1>
                        <div className='card__data-title'>
                            <p className='card__data'>{pokeDato?.types[0].type.name} </p>
                            {
                                pokeDato?.types[1] ? (
                                    <p className='card__data2'>

                                        <span className='card__data3'>{pokeDato?.types[1].type.name} </span>
                                    </p>
                                )
                                    :
                                    null
                            }

                        </div>
                        <p className='card__data'>Tipo</p>

                    </div>
                    <div >
                        <div className='card__habilities'>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[0].stat.name.toUpperCase()}</p>
                                <p className={`card__data color-${pokeDato?.types[0].type.name} card__data-weight`}>{pokeDato?.stats[0].base_stat}</p>
                            </div>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[1].stat.name.toUpperCase()}</p>
                                <p className={`card__data color-${pokeDato?.types[0].type.name} card__data-weight`}>{pokeDato?.stats[1].base_stat}</p>
                            </div>
                        </div>
                        <div className='card__habilities'>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[2].stat.name.toUpperCase()}</p>
                                <p className={`card__data color-${pokeDato?.types[0].type.name} card__data-weight`}>{pokeDato?.stats[2].base_stat}</p>
                            </div>
                            <div className='card__item'>
                                <p className='card__data'>{pokeDato?.stats[5].stat.name.toUpperCase()}</p>
                                <p className={`card__data color-${pokeDato?.types[0].type.name} card__data-weight`}>{pokeDato?.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PokeCard