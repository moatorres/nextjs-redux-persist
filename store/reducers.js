import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import authReducer from './reducers/auth-reducer'
import storage from './storage'

const authReducerConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['token'],
}

export const appReducer = combineReducers({
  auth: persistReducer(authReducerConfig, authReducer),
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    storage.removeItem('persist:auth')
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
