import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accounting } from 'accounting'

class ProductList extends Component {
  renderList() {
    return this.props.products.map((product) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.face}</td>
          <td style={{ fontSize: product.size }}>{product.size}</td>
          <td>{accounting.formatMoney(product.price)}</td>
        </tr>
      )
    })
  }

  render() {
    if (0 === this.props.products.length) {
      return (
        <tr>
          <td>
            No product found.
          </td>
        </tr>
      )
    }

    return (
      this.renderList()
    )
  }
}

ProductList.propTypes = {
  products: React.PropTypes.array
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList)
