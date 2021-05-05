import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED, 
  AUTH_ERROR,
  LOGOUT
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
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

  	case REGISTER_SUCCESS: 
  	  return {
  	  	...state,
  	  	...payload,
  	  	isAuthenticated: true,
  	  	loading: false
  	  };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null
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