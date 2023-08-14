import React, { useReducer } from 'react'
import { UserContext } from '@contexts'
import { UserReducer } from '@reducers'

import {
    SET_USER, CLEAN_USER
} from '../../contexts/types/index'

const UserState = props => {

    const initialState = {
        // token: localStorage.getItem('token'),
        user: { theme: 'light' },
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const setUser = async (user: any) => {
        dispatch({
            type: SET_USER,
            payload: user
        })
    }

    const cleanUser = () => {
        dispatch({
            type: CLEAN_USER
        })
    }

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                setUser,
                cleanUser,
            }}
        >
            {props.children}

        </UserContext.Provider>
    )
}



export default UserState