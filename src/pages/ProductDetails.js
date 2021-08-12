import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <Link to="/">Início</Link>
        <h1>{ title }</h1>
        <h3 data-testid="product-details-price">{ price }</h3>
        <img src={ thumbnail } alt={ title } />
        <Link to="/Cart">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.arrayOf(Object).isRequired,
};

export default ProductDetails;
