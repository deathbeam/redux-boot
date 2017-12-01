import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { NOT_FOUND } from 'redux-first-router'

// Actions
const ADD_ALERT = 'react-ui/app/ADD_ALERT'
const REMOVE_ALERT = 'react-ui/app/REMOVE_ALERT'

// Reducer
export default handleActions({
  [NOT_FOUND]: (state, { payload }) => ({
    ...state,
    title: '404',
    component: '404',
    payload: payload
  }),
  HOME: (state, { payload }) => ({
    ...state,
    title: ''Home',
    component: 'home',
    payload: payload
  }),
  [ADD_ALERT]: (state, { payload }) => ({
    ...state,
    alerts: R.pipe(R.concat, R.uniq)(state.alerts, [payload])
  }),
  [REMOVE_ALERT]: (state, { payload }) => ({
    ...state,
    alerts: R.filter(alert => alert !== payload)(state.alerts)
  })
}, {
  title: ''Home',
  component: 'home',
  alerts: []
})

// Action creators
export const addAlert = createAction(ADD_ALERT)
export const removeAlert = createAction(REMOVE_ALERT)
