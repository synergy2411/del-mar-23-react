// import {createStore } from 'redux';
const { createStore } = require("redux")


const initialState = {
    counter: 0
}

// REDUCER
function rootReducer(state = initialState, action) {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

// STORE
const store = createStore(rootReducer)

console.log("[STATE]", store.getState())


// SUBSCRIBE
store.subscribe(() => {
    console.log("[SUBS]", store.getState())
})

// ACTION
store.dispatch({ type: "INCREMENT" })
console.log("[STATE AFTER INCREMENT]", store.getState())

store.dispatch({ type: "DECREMENT" })
console.log("[STATE AFTER DECREMENT]", store.getState())