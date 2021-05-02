import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case LOGIN_SUCCESS:
  	case REGISTER_SUCCESS: 
  	  return {
  	  	...state,
  	  	...payload,
  	  	isAuthenticated: true,
  	  	loading: false
  	  };

    case LOGIN_FAIL:
  	case REGISTER_FAIL: 
  	  localStorage.removeItem('token');
      return {
  	  	...state,
        token: null,
  	  	isAuthenticated: false,
  	  	loading: false
  	  };

  	default:
  	  return state;
  }
}

export default userReducer;