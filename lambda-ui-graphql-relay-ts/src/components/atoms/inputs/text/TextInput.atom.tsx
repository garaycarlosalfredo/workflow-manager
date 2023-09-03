import React from 'react'
import './TextInput.atom.css'

const TextInput = ({ value, onChange, children }) => {
    return (
        <>
            <label className='textInputLabel'>{children}</label>
            <input className='textInput' type="text" value={value} onChange={onChange} />
        </>
    )
}

export default TextInput
