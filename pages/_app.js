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
