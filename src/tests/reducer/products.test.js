import { expect } from 'chai'
import productsReducer from '../../reducers/products'

describe('productsReducer', function() {
  context('state and action.type = null', function() {
    it('should be null!', function() {
      expect(productsReducer(null, 'non existing type')).to.be.null;
    })
  })

  context('state = null and action.type = PRODUCT_LIST and no product returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRODUCT_LIST',
        products: []
      }
      expect(productsReducer(null, action)).to.eql([])
    })
  })

  context('state = null and action.type = PRODUCT_LIST and a list of products returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRODUCT_LIST',
        products: [
          {
            id: 1,
            face: 'test-face',
            size: 'test-size',
			price: 'test-price'
          }
        ]
      }
      expect(productsReducer(null, action)).to.eql([{id: 1, face: 'test-face', size: 'test-size', price: 'test-price'}])
    })
  })
})
