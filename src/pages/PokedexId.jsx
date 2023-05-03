import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/pokeId.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import header from "../../public/header.png";

const PokedexId = () => {

    const { name } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokeId, getAllPokemon] = useFetch(url)

    useEffect(() => {
        getAllPokemon()
    }, [name])

    console.log(pokeId)
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/pokedex")
    }

    return (

        <div className='id__poke'>

            <div className='id__header_fond'>
                <div className='id__header_fond1'></div>
                <div className='id__header_fond2'></div>
                <img className='id__header' src={header} />
            </div>
            <a className={`pagination-previous buttom__prev `} onClick={handleBack} >  Regresar</a>

            <div className='id__container'>
                <div className='id__title_capital'>
                    <img className='id__poke__logo' src={pokeId?.sprites.other.dream_world.front_default} />
                </div>
                <div className='id__container__card'>
                    <div className='id__container__id'>#{pokeId?.id}</div>
                    <div className='id__title__name'>
                        <hr />
                        <h1>{name} </h1>
                        <hr />
                    </div>
                    <div className='id__data'>
                        <div className='id__title'>
                            <h2>Peso</h2>
                            <p className='id__title_data'>{(pokeId)?.weight}</p>
                        </div>
                        <div className='id__title'>
                            <h2>Altura</h2>
                            <p className='id__title_data'>{pokeId?.height}</p>
                        </div>
                    </div>
                    <div className='id__data2'>

                        <div className='id__title'>
                            <h2>Tipo</h2>
                            <div className='id__title_data2'>
                                <p className='id__title_dataP'>{pokeId?.types[0].type.name}</p>
                                {/* <p className='id__title_dataP2'>{pokeId?.types[1] ? pokeId?.types[1].type.name : null}</p> */}
                                {pokeId?.types[1] ? <p className='id__title_dataP2'>{pokeId?.types[1].type.name}</p> : null}
                            </div>
                        </div>

                        <div className='id__title'>
                            <div>
                                <h2>Habilidades</h2>
                                <div className='id__title_data2'>
                                    <p className='id__title_dataP'>{pokeId?.abilities[0].ability.name}</p>
                                    {pokeId?.abilities[1] ? <p className='id__title_dataP2'>{pokeId?.abilities[1].ability.name}</p> : null}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='id__stats'>
                        Stats
                    </div>
                    <div>
                        <p className='id__stats__title'>HP</p>
                        <div>
                            <p className='id__stats__title'>{pokeId?.stats[0].base_stat}/100</p>
                            <ProgressBar max="100" animated="true" variant="warning" now={pokeId?.stats[0].base_stat} />
                        </div>
                        <p className='id__stats__title'>Attack</p>
                        <div>
                            <p className='id__stats__title'>{pokeId?.stats[1].base_stat}/100</p>
                            <ProgressBar max="100" animated="true" variant="warning" now={pokeId?.stats[1].base_stat} />
                        </div>
                        <p className='id__stats__title'>Defense</p>
                        <div>
                            <p className='id__stats__title'>{pokeId?.stats[2].base_stat}/100</p>
                            <ProgressBar max="100" animated="true" variant="warning" now={pokeId?.stats[2].base_stat} />
                        </div>
                        <p className='id__stats__title'>Speed</p>
                        <div>
                            <p className='id__stats__title'>{pokeId?.stats[5].base_stat}/100</p>
                            <ProgressBar max="100" animated="true" variant="warning" now={pokeId?.stats[5].base_stat} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='id__footer'>
                <div className='id__footer_container'>
                    <div className='id__title_footer'>Movements</div>
                    <div className='id__moves'>{
                        pokeId?.moves.map(pok => (<p key={pok.id} className='id__moves_move'>{pok.move.name}</p>))
                    }</div>
                </div>
            </div>

        </div>
    )
}

export default PokedexId