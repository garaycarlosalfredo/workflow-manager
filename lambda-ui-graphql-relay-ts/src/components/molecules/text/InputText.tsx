import { TextInput, TextLabel } from "@atoms";

import React from 'react'

const InputText = ({ onChange, value, children }) => {
    return (
        <TextInput value={value} onChange={onChange}>{children}</TextInput>
    )
}

export default InputText
