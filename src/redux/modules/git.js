import { createAction, combineActions, handleActions } from 'redux-actions'
import { createRoutine } from 'redux-routines'
import { createSelector } from 'reselect'
import api from '../../api'

const user = 'deathbeam'
const repository = 'redux-boot'
const githubApi = api('https://api.github.com/')

// Actions
export const getCommitsRoutine = createRoutine('react-ui/git/GET_COMMITS')

// Reducer
export default handleActions({
  [combineActions(getCommitsRoutine.SUCCESS)]: (state, { payload }) => ({
    ...state,
    commits: payload
  })
}, {
  commits: []
})

// Action creators
export const getCommits = createAction(getCommitsRoutine.TRIGGER, (payload) => async (dispatch) => {
  try {
    dispatch(getCommitsRoutine.request())
    const response = await githubApi.wrapFailure(dispatch, githubApi.fetch(
      `repos/${user}/${repository}/commits`, { method: 'GET' }
    ))

    dispatch(getCommitsRoutine.success(response))
    return response
  } catch (e) {
    dispatch(getCommitsRoutine.failure(e))
  } finally {
    dispatch(getCommitsRoutine.fulfill())
  }
})

// Selectors
const commitsSelector = state => state.git.commits

export const latestCommitSelector = createSelector(
  commitsSelector,
  commits => commits[0]
)
