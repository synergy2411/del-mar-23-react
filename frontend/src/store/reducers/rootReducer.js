import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

export default rootReducer














// import * as fromActions from '../actions/rootActions';


// const initialState = {
//     counter: 0,
//     result: []
// }

// function rootReducer(state = initialState, action) {
//     switch (action.type) {
//         case fromActions.INCREMENT: {
//             let newState = {
//                 ...state,           // { result, counter }
//                 counter: state.counter + 1
//             }
//             return newState;
//         }
//         case fromActions.DECREMENT: {
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         }
//         case fromActions.ADD_COUNTER: {
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
//         }
//         case fromActions.SUBTRACT_COUNTER: {
//             return {
//                 ...state,
//                 counter: state.counter - action.payload
//             }
//         }
//         case fromActions.STORE_RESULT: {
//             return {
//                 ...state,
//                 result: [action.payload, ...state.result]
//             }
//         }
//         case fromActions.DELETE_RESULT: {
//             return {
//                 ...state,
//                 result: state.result.filter((val, ind) => ind !== action.payload)
//             }
//         }
//         default:
//             return state;
//     }
// }

// export default rootReducer;