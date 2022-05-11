import React from 'react'
import { Provider } from 'react-redux'
import Use from './Use'
import { store } from './store'

function RTK() {
  return (
    <Provider store={store}>
      <Use />
    </Provider>
  )
}

export default RTK