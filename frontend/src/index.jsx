import React from 'react'
import ReactDom from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//estado da aplicação será este, e os objetos estão no arquivo reducers
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))