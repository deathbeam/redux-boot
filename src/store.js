import { applyMiddleware, combineReducers, createStore } from "redux";
import { createActions, handleActions } from "redux-actions";
import rootReducer from "./modules";

/**
 * Create loading handler
 */
const { startLoading, stopLoading } = createActions(
  "START_LOADING",
  "STOP_LOADING"
);
const appReducer = handleActions(
  {
    [startLoading]: (state) => ({
      ...state,
      loading: state.loading + 1,
    }),
    [stopLoading]: (state) => ({
      ...state,
      loading: state.loading - 1,
    }),
  },
  {
    loading: 0,
  }
);

/**
 * Create async middleware
 */
function createThunkMiddleware() {
  function wrapAsync(dispatch, getState, action) {
    dispatch(startLoading());
    const result = action(dispatch, getState);

    if (result instanceof Promise) {
      return result
        .then((r) => {
          dispatch(stopLoading());
          return r;
        })
        .catch((e) => {
          dispatch(stopLoading());
          return e;
        });
    }

    dispatch(stopLoading());
    return result;
  }

  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return wrapAsync(dispatch, getState, action);
    }

    if (action && typeof action.payload === "function") {
      return wrapAsync(dispatch, getState, action.payload);
    }

    return next(action);
  };
}

/**
 * Configure react store
 */
function configureStore() {
  // Check if we are in debug mode
  const isDebug = process.env.NODE_ENV === "development";

  // Create middlewares
  const middlewares = [createThunkMiddleware()];

  // Add logger
  if (isDebug) {
    middlewares.push(require("redux-logger").default);
  }

  // Create reducer
  const reducer = combineReducers({ ...rootReducer, app: appReducer });

  // Create our store
  const store = createStore(reducer, applyMiddleware(...middlewares));

  return store;
}

export default configureStore();
