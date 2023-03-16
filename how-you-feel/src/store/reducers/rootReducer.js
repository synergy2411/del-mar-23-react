import * as fromActions from '../actions/rootActions';

const initialState = {
    token: null,
    isLoading: '',
    error: ""
}
export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.USER_LOGIN_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case fromActions.USER_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                token: action.payload
            }
        }
        case fromActions.USER_LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        case fromActions.USER_LOGOUT: {
            return {
                token: null,
                error: '',
                isLoading: false
            }
        }
        default: return state
    }
}