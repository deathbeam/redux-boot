import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Alert } from 'reactstrap'
import { removeAlert } from '../redux/modules/app'

const Alerts = ({ alerts, removeAlert }) => (
  <div>
    {R.map(alert => (
      <Alert color={alert.color} toggle={() => removeAlert(alert)} >
        Vyskytla sa chyba pri spracovávaní požiadavky - <b>{alert.message}</b>
      </Alert>))(alerts)}
  </div>
)

export default connect(
  (state, props) => ({
    ...props,
    alerts: state.app.alerts
  }),
  R.curry(bindActionCreators)({ removeAlert })
)(Alerts)
