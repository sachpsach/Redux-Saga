import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";


import { reducer } from "./redux";
import { watcherSaga } from "./sagas";


//creat the saga middlware 

const sagaMiddleware = createSagaMiddleware();


//dev tools middleware 
// const reduxDevTool = window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();


let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
);

//run the saga 

sagaMiddleware.run(watcherSaga);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
