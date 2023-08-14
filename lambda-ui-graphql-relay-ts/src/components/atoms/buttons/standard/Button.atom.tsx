import React, { useContext, useEffect, useState } from 'react'
// import "./Button.atom.css";
import MyButton from './Button.atom.syled'
import { UserContext } from '@contexts';
import { useThemeContext } from '@useContexts';

function ButtonStandard(props) {

    const userContext = React.useContext(UserContext)
    const { user } = userContext
    const theme = useThemeContext()
    console.log('theme', theme)
    // const [theme, setTheme] = useState()

    // console.log(themeContextData);
    // useEffect(() => {
    //     setTheme(theme)
    // }, [theme])

    return (
        <div>
            <button className={`${theme}`}>{props.children}</button>
            <MyButton />
        </div>
    )
}

export default ButtonStandard 
