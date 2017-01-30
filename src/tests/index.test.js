describe('actions', () => {
  describe('product', () => {
    require('./actions/product/sortProduct.test')
  })
})
describe('containers', () => {
  require('./containers/home.test')
  describe('product', () => {
    require('./containers/product/SortProduct.test')
    require('./containers/product/ProductList.test')
  })
})

describe('reducer', () => {
  describe('product', () => {
    require('./reducer/products.test.js')
  })
})
