import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './css/index.css'
import App from './components/containers/app'
import configureStore from './configureStore'

const store = configureStore()


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(('main'))
)
