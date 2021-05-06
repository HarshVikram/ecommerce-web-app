import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED, 
  AUTH_ERROR,
  LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/user');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
}

export const register = (formData) => async dispatch => {
  try {
  	const res = await axios.post('/api/user/register', formData);

  	dispatch({
  	  type: REGISTER_SUCCESS,
  	  payload: res.data
  	});
    dispatch(loadUser());
  } catch (err) {
  	const error = err.response.data.error;

    if (error) {
      console.log(error.msg);
    }
    
    dispatch({
      type: REGISTER_FAIL
    });
  }
}

export const login = (formData) => async dispatch => {
  try {
    const res = await axios.post('/api/user/login', formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.error;

    if (error) {
      console.log(error.msg);
    }
    
    dispatch({
      type: LOGIN_FAIL
    });
  }
}

export const logout = () => ({ type: LOGOUT });
