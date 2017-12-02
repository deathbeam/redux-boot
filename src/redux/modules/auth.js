import { createAction, combineActions, handleActions } from 'redux-actions'
import { createRoutine } from 'redux-routines'
import oauth from '../../oauth'

// Actions
export const refreshRoutine = createRoutine('react-ui/auth/REFRESH')
export const loginRoutine = createRoutine('react-ui/auth/LOGIN')
export const logoutRoutine = createRoutine('react-ui/auth/LOGOUT')

// Reducer
export default handleActions({
  [combineActions(loginRoutine.SUCCESS, refreshRoutine.SUCCESS)]: (state, { payload }) => ({
    ...state,
    ...payload,
    authenticated: true
  }),
  [combineActions(loginRoutine.FAILURE, refreshRoutine.FAILURE, logoutRoutine.FULFILL)]: (state, action) => ({
    ...state,
    user: '',
    accessToken: '',
    refreshRoutineToken: '',
    expiresIn: 0,
    authenticated: false
  })
}, {
  user: '',
  accessToken: '',
  refreshRoutineToken: '',
  expiresIn: 0,
  authenticated: false
})

// Action creators
export const login = createAction(loginRoutine.TRIGGER, (payload) => async (dispatch) => {
  try {
    dispatch(loginRoutine.request())
    const response = await oauth.wrapFailure(dispatch, oauth.login({
      username: payload.username, password: payload.password
    }))

    dispatch({ type: 'HOME' })
    dispatch(loginRoutine.success(response))
    return response
  } catch (e) {
    dispatch(loginRoutine.failure(e))
  } finally {
    dispatch(loginRoutine.fulfill())
  }
})

export const refresh = createAction(refreshRoutine.TRIGGER, () => async (dispatch) => {
  try {
    dispatch(refreshRoutine.request())
    const response = await oauth.refresh()
    dispatch(refreshRoutine.success(response))
    return response
  } catch (e) {
    dispatch(refreshRoutine.failure(e))
  } finally {
    dispatch(refreshRoutine.fulfill())
  }
})

export const logout = createAction(logoutRoutine.TRIGGER, (payload) => (dispatch) => {
  dispatch(logoutRoutine.request())

  if (oauth.logout()) {
    dispatch({ type: 'HOME' })
    dispatch(logoutRoutine.success())
  } else {
    dispatch(logoutRoutine.failure())
  }

  dispatch(logoutRoutine.fulfill())
})
