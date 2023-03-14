import * as fromActions from '../actions/rootActions';


const initialState = {
    counter: 0,
    result: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.INCREMENT: {
            return {
                ...state,           // { result, counter }
                counter: state.counter + 1
            }
        }
        case fromActions.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case fromActions.ADD_COUNTER: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case fromActions.SUBTRACT_COUNTER: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case fromActions.STORE_RESULT: {
            return {
                ...state,
                result: [action.payload, ...state.result]
            }
        }
        default:
            return state;
    }
}

export default rootReducer;