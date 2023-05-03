
import Pagination from "./Pagination"
import PokeCard from "./PokeCard"
import { useEffect, useState } from "react"
import "../../pages/styles/card.css"
import useFetch from "../../hooks/useFetch"

const PokeContainer = ({ fornUrl }) => {

    const [pokeCard, getAllPokemons] = useFetch(fornUrl)
    useEffect(() => {
        getAllPokemons()
    }, [fornUrl])

    const totalproducts = pokeCard?.results ? pokeCard?.results.length : pokeCard?.pokemon.length
    console.log(totalproducts)
    const productsPerPage = 50

    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    return (
        <div >
            <Pagination productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalproducts={totalproducts} />
            <div className="poke-container">
                {
                    pokeCard?.results ?
                        (
                            pokeCard?.results.map(poke => <PokeCard key={poke.name} poke={poke} />).slice(firstIndex, lastIndex)
                        )
                        :
                        (
                            pokeCard?.pokemon.map(objPoke => <PokeCard key={objPoke.pokemon.name} poke={objPoke.pokemon} />).slice(firstIndex, lastIndex)
                        )
                }
            </div>
        </div>
    )
}

export default PokeContainer