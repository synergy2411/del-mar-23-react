import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk)
}, composeWithDevTools())

export default store;