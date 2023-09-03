import { Button } from "@atoms";

import React from 'react'

const SubmitButton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

export default SubmitButton
