import {
    SET_USER,
    CLEAN_USER, SET_USER_THEME
} from '../../contexts/types'

export default (state: any, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case CLEAN_USER:
            //  localStorage.removeItem('token')
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
}