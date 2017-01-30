import config from '../../config'
import { product as types } from '../../constants/actionTypes'
import request from '../api'

const receiveListProduct = (products) => {
  return {
    type: types.PRODUCT_LIST,
    products
  }
}

const receiveListProductFAIL = () => {
  return { type: types.PRODUCT_LIST_FAIL }
}

const sortSuccess = (data, dispatch) => {
  dispatch(receiveListProduct(data))
}

const sortFailure = (response, dispatch) => {
  dispatch(receiveListProductFAIL())
}

export const sortProduct = (sort) => {
  return (dispatch) => {
    const sortQueryParam = sort ? `sort=${sort}` : ''
    return request(`${config.apiUrl}/api/products?${sortQueryParam}`, 'GET')
      .then((response) => {
        sortSuccess(response.data, dispatch)
      })
      .catch((response) => {
        sortFailure(response, dispatch)
      })
  }
}

export const getProducts = () => {
  return (dispatch) => {
    return request(`${config.apiUrl}/api/products`, 'GET')
      .then((response) => {
        sortSuccess(response.data, dispatch)
      })
      .catch((response) => {
        sortFailure(response, dispatch)
      })
  }
}
