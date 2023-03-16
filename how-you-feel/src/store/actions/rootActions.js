import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const app = initializeApp({
    apiKey: "AIzaSyBOjwFcHyuxHoiX_U3QxghjAa1Uan1V1ZE",
    authDomain: "deloitte-react-mar23.firebaseapp.com",
})
const auth = getAuth(app)

export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGOUT = "USER_LOGOUT"

export function onUserLogout() {
    return {
        type: USER_LOGOUT
    }
}

export function onUserLogin(email, password) {

    return dispatch => {
        dispatch({ type: USER_LOGIN_START });
        setTimeout(() => {
            signInWithEmailAndPassword(auth, email, password)
                .then(({ user }) => dispatch(onUserLoginSuccess(user.accessToken)))
                .catch(({ code }) => dispatch(onUserLoginFailure(code)))
        }, 2000)
    }
}
export function onUserRegister(email, password) {

    return dispatch => {
        dispatch({ type: USER_LOGIN_START });
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => dispatch(onUserLoginSuccess(user.accessToken)))
            .catch(({ code }) => dispatch(onUserLoginFailure(code)))
    }
}

function onUserLoginSuccess(token) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: token
    }
}
function onUserLoginFailure(err) {
    return {
        type: USER_LOGIN_FAILURE,
        payload: err
    }
}