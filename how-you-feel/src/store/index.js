import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk)
})

export default store;