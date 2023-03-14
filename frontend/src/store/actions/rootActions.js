export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"

export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"


// Action Creators

// Async Action Creator
export function asyncAddCounter(value) {
    return function (dispatch) {
        // write any side effect code here
        setTimeout(() => {
            dispatch(onAddCounter(value))
        }, 2000)
    }
}


export function onDeleteResult(index) {
    return {
        type: DELETE_RESULT,
        payload: index
    }
}

export function onStoreResult(counter) {
    return {
        type: STORE_RESULT,
        payload: counter
    }
}

export function onSubractCounter(value) {
    return {
        type: SUBTRACT_COUNTER,
        payload: value
    }
}

export function onAddCounter(value) {
    return {
        type: ADD_COUNTER,
        payload: value
    }
}

export function onIncrement() {
    return {
        type: INCREMENT
    }
}

export function onDecrement() {
    return {
        type: DECREMENT
    }
}
