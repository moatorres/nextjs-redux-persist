## ⚡️ Next.js Redux/Thunk Persist Boilerplate

Boilerplate for building Next.js/React apps with Redux and Redux Persist for store data persistance on the client.

### `store.js`

```jsx

const store = ({ isServer }) => {
  // server side store
  if (isServer) return createStore(appReducer, storeMiddleware)

  // client side persisted store
  const store = createStore(rootReducer, initialState, storeMiddleware)
  store.__persistor = persistStore(store)

  return store
}

export const ReduxWrapper = createWrapper(store).withRedux
```

### `_app.js`

```jsx
import React from 'react'
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReduxWrapper } from '../store'

const App = ({ Component, pageProps }) => {
  const store = useStore((state) => state)

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default ReduxWrapper(App)
```

<sub><sup>Escrito por [Moa](https://github.com/moatorres) — Powered by ☕️</sup></sub>
