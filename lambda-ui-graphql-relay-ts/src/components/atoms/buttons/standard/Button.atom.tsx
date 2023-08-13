import React, { useContext, useEffect, useState } from 'react'
// import "./Button.atom.css";
import MyButton from './Button.atom.syled'
import { ThemeContext } from "@contexts"; // Ajusta la ruta de importación según sea necesario
import { UserContext } from '@contexts2';
import { useThemeContext } from 'src/contexts/use-context/UseContext';
function ButtonStandard(props) {

    const themeContextData = useContext(ThemeContext);
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
