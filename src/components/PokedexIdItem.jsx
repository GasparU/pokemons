import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const PokedexIdItem = ({ pokeId }) => {
    return (

        <div className='id__container'>
            <div className={`id__title_capital bg-${pokeId?.types[0].type.name}`}>
                <img className='id__poke__logo' src={pokeId?.sprites.other["official-artwork"].front_default} />
            </div>
            <div className='id__container__card'>
                <div className={`id__container__id color-${pokeId?.types[0].type.name} `}>#{pokeId?.id}</div>
                <div className='id__title__name'>
                    <hr />
                    <h1 className={`id__container_title color-${pokeId?.types[0].type.name}`} >{name} </h1>
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


    )
}

export default PokedexIdItem