import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { getActiveUser } from '../redux/modules/users'

const hasRole = (role, user) => {
  return user && user.userRoles && !!R.find(R.propEq('type'))(user.userRoles, role)
}

const canRender = (authenticated, activeUser, required) => {
  if (required === 'any') {
    return authenticated
  } else if (required === 'none') {
    return !authenticated
  }

  return authenticated && hasRole(required, activeUser)
}

const AuthBlock = ({children, authenticated, activeUser, required}) => canRender(authenticated, activeUser, required)
  ? children
  : (<noscript />)

export default connect(
  (state, props) => ({
    ...props,
    activeUser: getActiveUser(state, props),
    authenticated: state.auth.authenticated
  })
)(AuthBlock)
