import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

const expect = chai.expect
const ProductListConnect = rewire('../../../containers/product/ProductList')
const ProductList = ProductListConnect.__get__('ProductList')

chai.use(chaiEnzyme())

describe('SortPro', () => {
  it('should return a list of products', () => {
    const products = [
      {
        id: 1,
        face: 'test-face',
        size: 'test-size',
		price: 'test-price',
      }
    ]
    const enzymeWrapper  = shallow(<ProList pros={products} />)
    expect(enzymeWrapper).to.have.html('<tr><td>1</td><td>test-face</td><td>test-size</td><td>test-price</td></tr>')
  })

  it('should return not found', () => {
    const enzymeWrapper  = shallow(<ProList />)
    expect(enzymeWrapper).to.have.html('<tr><td>No product found.</td></tr>')
  })
})
