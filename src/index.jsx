import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'
import { createStore } from 'redux'
import rootReducer from 'store/reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
