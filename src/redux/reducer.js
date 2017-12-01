import appReducer from './modules/app'
import authReducer from './modules/auth'

// Combine all redux reducers into one root reducer
export default {
  // app-specific
  app: appReducer,
  auth: authReducer,
}
