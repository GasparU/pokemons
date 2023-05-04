
import Pagination from "./Pagination"
import PokeCard from "./PokeCard"
import { useEffect, useState } from "react"
import "../../pages/styles/card.css"
import useFetch from "../../hooks/useFetch"

const PokeContainer = ({ fornUrl, style, currentPage, setCurrentPage }) => {


    const [pokeCard, getAllPokemons, hasError, isLoading] = useFetch(fornUrl)
    useEffect(() => {
        getAllPokemons()
    }, [fornUrl])
    console.log(pokeCard)
    const totalproducts = pokeCard?.results ? pokeCard?.results.length : pokeCard?.pokemon.length


    const productsPerPage = 50

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
    console.log(isLoading)
    return (
        <div className="poke__container">
            {
                isLoading ? <p>Cargando.....</p> :
                    <>
                        <Pagination productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalproducts={totalproducts} />
                        <div className="poke-container">
                            {
                                (pokeCard?.results ?
                                    (
                                        pokeCard?.results.map(poke => <PokeCard style={style} key={poke.name} poke={poke} />).slice(firstIndex, lastIndex)
                                    )
                                    :
                                    (
                                        pokeCard?.pokemon.map(objPoke => <PokeCard style={style} key={objPoke.pokemon.name} poke={objPoke.pokemon} />).slice(firstIndex, lastIndex)
                                    ))
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default PokeContainer