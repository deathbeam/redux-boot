import R from 'ramda'
import { fetchCategories } from './modules/categories'
import { visibilityChange as clientVisibilityChange } from './modules/client'
import { showVisibilityChange, detailVisibilityChange } from './modules/eshop'

const createThunk = (fns) => async (dispatch, getState) => R.reduce(
  (a, b) => a.then((r) => dispatch(b(getState().location.payload.slug))),
  Promise.resolve(),
  fns)

export default {
  HOME: '/'
}
