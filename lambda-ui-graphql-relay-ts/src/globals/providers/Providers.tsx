import React from 'react'
import { UserState, ConfigState } from "@states";

function Providers({ children }: any) {
    return (
        <ConfigState>
            <UserState>
                {children}
            </UserState>
        </ConfigState>
    )
}

export default Providers
