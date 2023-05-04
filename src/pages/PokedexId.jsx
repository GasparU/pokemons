import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/pokeId.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import header from "../../public/header.png";
import PokedexIdItem from '../components/PokedexIdItem';

const PokedexId = () => {

    const { name } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokeId, getAllPokemon, hasError] = useFetch(url)
    console.log(pokeId)
    useEffect(() => {
        getAllPokemon()
    }, [name])

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
            {
                hasError ? <p>Error de pagina</p> :
                    <PokedexIdItem pokeId={pokeId} />
            }
            <div className='id__footer'>
                <div className='id__footer_container'>
                    <div className='id__title_footer'>Movements</div>
                    <div className='id__moves'>{
                        pokeId?.moves.map(pok => (<p key={pok.move.url} className='id__moves_move'>{pok.move.name}</p>))
                    }</div>
                </div>
            </div>

        </div>
    )
}

export default PokedexId