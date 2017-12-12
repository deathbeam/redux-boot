import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { connect } from 'react-redux'
import Navigation from './navigation'
import UiBlock from './ui-block'

const App = ({ title, component, payload }) => {
  const Component = require(`../containers/${component}`).default

  return (
    <div>
      <UiBlock />
      <Navigation />
      <Component {...payload} />
    </div>
  )
}

export default connect(
  (state, props) => ({
    ...props,
    ...state.app
  })
)(App)
