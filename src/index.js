import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './reducers'
import './css/styles.scss'
import { loadState, saveState } from "./persistState/localStorage";
import App from "./components/App"

const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(thunk, logger)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => {
    saveState(store.getState());
});

const myStore = store.getState();
console.log("myStore", myStore.favourites);