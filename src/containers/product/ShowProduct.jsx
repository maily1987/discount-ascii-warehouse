import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts, sortProduct } from '../../actions/product/sortProduct'
import ProductList from './ProductList'

class ShowProduct extends Component {
  constructor() {
    super()

    this.onHeaderClick = this.onHeaderClick.bind(this)
    this.state = {
      titles: ['Id', 'Item', 'Size', 'Price'],
      sort: '',
    }
  }

  componentWillMount() {
    this.props.getProducts()
  }

  onHeaderClick(e) {
    this.setState({
      sort: e.target.innerText.toLowerCase()
    })

    this.props.sortProduct(this.state.sort)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.state.titles.map((title, index) => {
              return (<th key={index} onClick={this.onHeaderClick}>{title}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          <ProductList />
        </tbody>
      </table>
    )
  }
}

ShowProduct.propTypes = {
  getProducts: React.PropTypes.func,
  sortProduct: React.PropTypes.func,
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getProducts, sortProduct }, dispatch)
}

export default connect(null, matchDispatchToProps)(ShowProduct)
