import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_ERROR
} from '../actions/types';

const initialState = {
  products: [],
  product: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
  	case GET_PRODUCT:
  	  return {
  	  	...state,
  	  	product: payload,
  	  	loading: false
  	  }

  	case GET_PRODUCTS: 
  	  return {
  	  	...state,
  	  	products: payload,
  	  	loading: false
  	  }

  	case PRODUCT_ERROR:
  	  return {
  	  	...state,
  	  	error: payload,
  	  	loading: false
  	  }

  	default: 
  	  return state; 
  }
}