import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import sortProduct from '../../../actions/product/sortProduct'

const expect = chai.expect
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

chai.use(chaiJsonEqual)

afterEach(() => {
  nock.cleanAll()
})

it('dispatch PRODUCT_LIST', () => {
  const id = 'test'
  const jsonResponse = {
    'id': id
  }

  nock('http://localhost')
    .get('/api?sort=id')
    .reply(200, jsonResponse)

  const expectedActions = [
    {
      type: 'PRODUCT_LIST',
      products: id
    },
  ]
  const store = mockStore()

  return store.dispatch(sortProduct('id'))
    .then(() => {
      expect(store.getActions()).to.jsonEqual(expectedActions)
    })
})
