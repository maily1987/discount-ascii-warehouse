import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

const expect = chai.expect
const ShowProductConnect = rewire('../../../containers/product/ShowProduct')
const ShowProduct = ShowProductConnect.__get__('ShowProduct')

describe('ShowProduct', () => {
  const enzymeWrapper  = shallow(<ShowProduct />)

  it('should have a table', () => {
    expect(enzymeWrapper.find('table')).to.have.length(1)
  })
})
