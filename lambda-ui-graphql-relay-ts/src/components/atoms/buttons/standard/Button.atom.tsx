import React, { ReactNode, useCallback } from 'react'
import "./Button.atom.css";
import MyButton from './Button.atom.syled'
import { useThemeContext } from '@useContexts';
import { ButtonProps } from './Button.atom.type';

function
    Button({ children, onClick }) {
    const theme = useThemeContext()
    return (
        <button className={`button btn-${theme}`} onClick={onClick}>{children}</button>
    )
}

export default Button 
