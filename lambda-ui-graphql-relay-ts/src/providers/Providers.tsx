import React from 'react'
import { UserState } from "@states";

function Providers({ children }: any) {
    return (
        <UserState>
            {children}
        </UserState>
    )
}

export default Providers
