import * as fromActions from '../actions/rootActions';

const intialState = {
    token: null,
    isLoading: '',
    errMessage: ''
}

export function userLoginReducer(state = intialState, action) {
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
                token: action.payload,
                isLoading: false
            }
        }
        case fromActions.USER_LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        }
        default: return state;
    }

}