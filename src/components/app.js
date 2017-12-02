import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { connect } from 'react-redux'
import Navigation from './navigation'
import UiBlock from './ui-block'

const components = {
  404: () => require('../containers/404').default,
  home: () => require('../containers/home').default
}

const App = ({ title, component, payload }) => {
  const Component = components[component]()

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
