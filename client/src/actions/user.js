import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';

export const register = (formData) => async dispatch => {
  try {
  	const res = await axios.post('/api/user/register', formData);

  	dispatch({
  	  type: REGISTER_SUCCESS,
  	  payload: res.data
  	});
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