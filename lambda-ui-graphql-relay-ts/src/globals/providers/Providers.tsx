import React from 'react'
import { UserState } from "src/globals/states";

function Providers({ children }: any) {
    return (
        <UserState>
            {children}
        </UserState>
    )
}

export default Providers
