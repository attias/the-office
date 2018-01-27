import React from 'react'
import { Provider } from 'react-redux'
import Home from './components/Home'
import configureStore from './store'
import './App.css'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)