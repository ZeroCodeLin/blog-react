import React,{Component} from "react"
import ReactDOM from 'react-dom'
import Router from './router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import example from './reducers/example'
import style from './index.less'
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers({ example })

let store = createStore(reducer,composeWithDevTools())




ReactDOM.render(
    <Provider store={store} >
        <Router />
    </Provider>,
    document.getElementById('root')
)