import { handleActions } from 'redux-actions'
import { NOT_FOUND } from 'redux-first-router'

// Reducer
export default handleActions({
  [NOT_FOUND]: (state, { payload }) => ({
    ...state,
    component: '404',
    payload: payload
  }),
  HOME: (state, { payload }) => ({
    ...state,
    component: 'home',
    payload: payload
  })
}, {
  component: 'home'
})
