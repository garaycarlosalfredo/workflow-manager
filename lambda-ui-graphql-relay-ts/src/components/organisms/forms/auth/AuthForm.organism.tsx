import { SubmitButton, InputText } from '@molecules'
import React, { useCallback, useState } from 'react'
import './AuthForm.organism.css'

function AuthForm() {

    const [shouldSubmit, setShouldSubmit] = useState(false)


    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        (shouldSubmit) ? console.log('submit') : console.log('no submit yet')
    }, [shouldSubmit])

    const ShouldSubmit = useCallback((value) => {
        console.log('value', value)
        setShouldSubmit(value)
    }, [])

    return (
        <form className='authForm' onSubmit={handleSubmit}>
            <InputText value={"Carlos"} onChange={() => console.log('change')} >Nombre</InputText>
            <InputText value={"Garay"} onChange={() => console.log('change')} >Apellido</InputText>
            <SubmitButton onClick={() => ShouldSubmit(true)}>Submit</SubmitButton>
        </form >

    )
}

export default AuthForm
