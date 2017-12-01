import { applyMiddleware, createStore, combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import { reducer as reduxFormReducer } from 'redux-form'
import { composeWithDevTools } from 'remote-redux-devtools'
import blockUiMiddleware from 'react-block-ui/reduxMiddleware'
import thunkMiddleware from './middleware/thunkMiddleware'
import rootReducer from './reducer'
import routes from './routes'
import { refresh } from './modules/auth'

/**
 * Configure react store
 */
const configureStore = (history, initialState) => {
  // Create router enhancers
  const { reducer, middleware, enhancer } = connectRoutes(
    history,
    routes,
    {
      title: (state) => state.app.title + ' - lesenia.sk'
    }
  )

  // Combine all reducers
  const reducers = combineReducers({
    ...rootReducer,
    location: reducer,
    form: reduxFormReducer
  })

  // Apply all middlewares
  const middlewares = applyMiddleware(
    blockUiMiddleware,
    thunkMiddleware,
    middleware
  )

  // Compose our enhancer from various middlewares
  const enhancers = composeWithDevTools(enhancer, middlewares)

  // Create our store from rootReducer and initial state
  const store = createStore(reducers, initialState, enhancers)

  // Try to login
  store.dispatch(refresh())

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(combineReducers({
        ...nextRootReducer,
        location: reducer,
        form: reduxFormReducer
      })
      )
    })
  }

  return store
}

export default configureStore
