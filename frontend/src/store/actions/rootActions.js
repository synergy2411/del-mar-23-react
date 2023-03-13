export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"


// Action Creators

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