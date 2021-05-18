import { createStore as reduxCreateStore, combineReducers, PreloadedState } from 'redux'

import userReducer from './userReducer'
// import stateReducer from './stateRed'

const reducers = combineReducers({
  userReducer,
  // stateReducer,
})

export type RootState = ReturnType<typeof reducers>

const createStore = (preloadedState?: PreloadedState<RootState>) =>
  reduxCreateStore(reducers, preloadedState)

export default createStore
