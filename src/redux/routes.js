import R from 'ramda'
import { getCommits } from './modules/git'

const createThunk = (fns) => async (dispatch, getState) => R.reduce(
  (a, b) => a.then((r) => dispatch(b(getState().location.payload.slug))),
  Promise.resolve(),
  fns)

const createRoute = (path, fns) => ({
  path,
  thunk: createThunk(fns || [])
})

export default {
  HOME: createRoute('/', [ getCommits ])
}
