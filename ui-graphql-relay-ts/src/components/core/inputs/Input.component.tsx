import React from 'react'
import { text } from 'stream/consumers'
import './Input.component.css'

function Input({ handleOnChange }: any) {
    return (
        <input type="text" className='form-input' onChange={(e) => handleOnChange(e.target.value)
        } />
    )
}

export default Input
