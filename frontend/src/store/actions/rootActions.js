import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// FIREBASE CONFIG

const app = initializeApp({
    apiKey: "AIzaSyBOjwFcHyuxHoiX_U3QxghjAa1Uan1V1ZE",
    authDomain: "deloitte-react-mar23.firebaseapp.com",
})

const auth = getAuth(app);

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"

export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"




// Action Creators

export function onUserRegister(email, password) {
    return function (dispatch) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const token = userCredentials.user.accessToken;
                dispatch(onUserLoginSuccess(token))
            })
            .catch(err => {
                dispatch(onUserLoginFailure(err.code))
            })
    }
}

export function onUserLogin(email, password) {
    return function (dispatch) {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const token = userCredentials.user.accessToken;
                dispatch(onUserLoginSuccess(token))
            })
            .catch(err => {
                dispatch(onUserLoginFailure(err.code))
            })
    }
}

function onUserLoginSuccess(token) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: token
    }
}

function onUserLoginFailure(errMessage) {
    return {
        type: USER_LOGIN_FAILURE,
        payload: errMessage
    }
}

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
