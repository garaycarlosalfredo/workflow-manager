import React, { useReducer } from 'react'
import { ConfigContext } from '@contexts'
import { Config } from 'src/server/config'

const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;


const ConfigState = (props: any) => {

    return (
        <ConfigContext.Provider
            value={config}
        >
            {props.children}

        </ConfigContext.Provider>
    )
}



export default ConfigState