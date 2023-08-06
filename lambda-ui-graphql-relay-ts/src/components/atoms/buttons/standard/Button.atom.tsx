import React from 'react'
// import "./Button.atom.css";
import MyButton from './Button.atom.syled'

function ButtonStandard(props) {
    return (
        <div>
            <button className='button-normal'>{props.children}</button>
            <MyButton />
        </div>
    )
}

export default ButtonStandard 
