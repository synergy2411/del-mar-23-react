import * as fromActions from '../actions/rootActions';


const initialState = {
    result: []
}

function resultReducer(state = initialState, action) {
    switch (action.type) {

        case fromActions.STORE_RESULT: {
            return {
                ...state,
                result: [action.payload, ...state.result]
            }
        }
        case fromActions.DELETE_RESULT: {
            return {
                ...state,
                result: state.result.filter((val, ind) => ind !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default resultReducer;