import React, { useEffect, useRef } from 'react'
import "./styles/formpoke.css"
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
const FormPoke = ({ setFormUrl, urlBase }) => {

    const inputPoke = useRef()

    const url = "https://pokeapi.co/api/v2/type/"
    const [types, getAllTypes] = useFetch(url)

    useEffect(() => {
        getAllTypes()
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    const handleChange = (e) => {
        setFormUrl(e.target.value)
    }
    return (
        <div>

            <form className="form__container" onSubmit={handleSubmit}>
                <input ref={inputPoke} className="formPoke__input" type='text' />
                <button className="btn__formPoke">Search</button>
            </form>
            <select onChange={handleChange} className='form__select'  >
                <option value={urlBase}>all Pokemons</option>
                {
                    types?.results.map(type =>
                        <option
                            value={type.url}
                            key={type.url}
                        >
                            {type.name}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default FormPoke