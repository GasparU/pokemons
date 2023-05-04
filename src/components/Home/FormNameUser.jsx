import React, { useRef } from 'react'
import { setTrainerName } from "../../store/slices/trainerName.slice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./style/formNameUser.css"

const FormNameUser = () => {


    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate("/pokedex")
    }

    return (
        <form className='form__container-user' onSubmit={handleSubmit}>
            <input className='formName__input' ref={inputName} type='text' placeholder='Your Name'></input>
            <button className='btn__formName'>Start</button>
        </form>
    )
}

export default FormNameUser