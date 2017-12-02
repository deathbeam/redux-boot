import R from 'ramda'
import { refresh } from './modules/auth'

const createThunk = (fns) => async (dispatch, getState) => R.reduce(
  (a, b) => a.then((r) => dispatch(b(getState().location.payload.slug))),
  Promise.resolve(),
  fns)

const createRoute = (path, fns) => ({
  path,
  thunk: createThunk(R.prepend(refresh, fns || []))
})

export default {
  HOME: createRoute('/')
}
