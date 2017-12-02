import { handleActions } from 'redux-actions'
import { NOT_FOUND } from 'redux-first-router'

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
    title: 'Home',
    component: 'home',
    payload: payload
  })
}, {
  title: 'Home',
  component: 'home'
})
