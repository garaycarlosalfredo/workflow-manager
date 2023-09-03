import React from 'react'
import { useThemeContext } from '@useContexts';

function ButtonStandard({ children }: any) {
    const theme = useThemeContext()
    return (
        <div>
            {children}
        </div>
    )
}

export default ButtonStandard 
