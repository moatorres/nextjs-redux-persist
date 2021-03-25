import axios from 'axios'
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../types'

export const login = (body) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  })

  try {
    const res = await axios.post('https://api.example.com/auth/login', body)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  await fetch.get('https://api.example.com/auth/logout')
  dispatch({ type: LOGOUT })
}
