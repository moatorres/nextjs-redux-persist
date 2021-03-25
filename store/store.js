import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { appReducer } from './reducers'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production')
    composeWithDevTools(applyMiddleware(...middleware))

  return applyMiddleware(...middleware)
}

const storeMiddleware = bindMiddleware([thunk])

const store = ({ isServer }) => {
  const initialState = {}

  // server side store
  if (isServer) return createStore(appReducer, storeMiddleware)

  // client side persisted store (local storage)
  const store = createStore(rootReducer, initialState, storeMiddleware)
  store.__persistor = persistStore(store)

  return store
}

export const ReduxWrapper = createWrapper(store).withRedux
