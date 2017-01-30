import { fromJS } from 'immutable'
import product  from '../constants/actionTypes'

const transformProducts = (products) => {
  const transformedProducts = []
  let i
  let productCurrent = {}

  for (i = 0; i < products.length; i++) {
    productCurrent = products[i]
    transformedProducts[i] = {
      id: productCurrent.id,
      face: productCurrent.face,
      size: productCurrent.size,
      price: productCurrent.price,
    }
  }

  return transformedProducts
}

const initialState = fromJS({
  id: null,
  face: null,
  size: null,
  price: null,
})

const reducerProducts = (state = initialState, action) => {
  const products = action.products

  switch (action.type) {
    case product.PRODUCT_LIST:
      return transformProducts(products, initialState)
    default:
      return state
  }
}

export default reducerProducts
