import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions'

const Home = ({ login }) => {
  const handleLogin = () => {
    login({ email: '', password: '' })
  }

  return (
    <button type="submit" onClick={handleLogin}>
      <h1>Next.js Redux/Thunk Persist boilerplate</h1>
    </button>
  )
}

export default connect(null, { login })(Home)
