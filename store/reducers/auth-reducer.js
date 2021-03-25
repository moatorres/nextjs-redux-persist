import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../types'

const initialState = {
  user: null,
  loading: true,
  error: null,
}

function authReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        loading: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      }

    case LOGIN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }
    default:
      return state
  }
}

export default authReducer
