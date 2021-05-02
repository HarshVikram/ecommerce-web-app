import axios from 'axios';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR
} from './types';

export const getProduct = (id) => async dispatch => {
  try {
  	const res = await axios.get(`/api/product/${id}`);
  	dispatch({
  	  type: GET_PRODUCT,
  	  payload: res.data
  	});
  } catch(err) {
  	dispatch({
  	  type: PRODUCT_ERROR,
  	  payload: { msg: err.response.statusText, status: err.response.status }
  	});
  }
}

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get(`/api/product`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}